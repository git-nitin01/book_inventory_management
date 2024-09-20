import {
  FormWrapper,
  FormInput,
  FormButton,
  InnerFormWrapper
} from "../styles/addBook";
import { NavButton } from "../styles/NavBar";
import { ErrorBox } from "../styles/common";  
import { useDataContext } from "../context/DataProvider";
import PopUp from "./PopUp";
import { useEffect, useState } from "react";

const AddForm = ({ onClose }) => {
  const [ isbns, setIsbns ] = useState(new Set());
  const { data } = useDataContext();

  useEffect(() => {
    const isbns = new Set(data.map((entry) => entry.isbn));
    setIsbns(isbns);
  }, [data]);

  const [ bookData, setBookData ] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    publicationDate: "",
    stock: ""
  });
  const { handleAdd } = useDataContext();
  const [ Error, setError ] = useState({
    isError: false,
    message: ""
  });

  const validateEntries = () => {
    let flag = true;
    const datePattern = /^(January|February|March|April|May|June|July|August|September|October|November|December)\s([1-9]|[12][0-9]|3[01]),\s\d{4}$/;
    if (bookData.title === "" || bookData.author === "" || bookData.genre === "" || bookData.isbn === "" || bookData.publicationDate === "" || bookData.stock === "") {
      setError({
        isError: true,
        message: "Please fill all fields"
      });
      flag = false;
    } else if (bookData.isbn.length !== 13) {
      setError({
        isError: true,
        message: "ISBN must be 13 characters"
      });
      flag = false;
    } else if (isNaN(bookData.stock)) {
      setError({
        isError: true,
        message: "Stock must be a number"
      });
      flag = false;
    } else if (typeof bookData.stock === "number") {
      if (bookData.stock < 0) {
        setError({
          isError: true,
          message: "Stock must be a positive number"
        });
        flag = false;
      } else if (bookData.stock % 1 !== 0) {
        setError({
          isError: true,
          message: "Stock must be an integer"
        });
        flag = false;
      }
    } else if (!datePattern.test(bookData.publicationDate)) {
      setError({
        isError: true,
        message: "Invalid date format"
      });
      flag = false;
    } else if (isbns.has(bookData.isbn)) {
      setError({
        isError: true,
        message: "ISBN already exists"
      });
      flag = false;
    } else {
      resetError();
    }
    return flag;
  }

  const resetError = () => {
    setError({
      isError: false,
      message: ""
    })
  }
  const handleAddBook = (e) => {
    e.preventDefault();
    if (!validateEntries()) return;
    // should be in the format of YYYY-MM-DD
    bookData.publicationDate = new Date(bookData.publicationDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });

    handleAdd(bookData);
    onClose();
    alert('Book added successfully');
  };

  const handleChange = (key) => (e) => {
    Error.isError && resetError();
    setBookData({
      ...bookData,
      [key]: e.target.value,
    });
  }

  return (
    <FormWrapper onSubmit={handleAddBook}>
      <h2 style={{
        margin: "0"
      }}>Add New Book</h2>
      {Error.isError && <ErrorBox>{Error.isError && Error.message}</ErrorBox>}
      <InnerFormWrapper>
        <FormInput type="text" placeholder="Title*" onChange={handleChange('title')}/>
        <FormInput type="text" placeholder="Author*" onChange={handleChange('author')}/>
      </InnerFormWrapper>
      <InnerFormWrapper>
        <FormInput type="text" placeholder="Genre*" onChange={handleChange('genre')}/>
        <FormInput type="text" placeholder="ISBN*" onChange={handleChange('isbn')}/>
      </InnerFormWrapper>
      <InnerFormWrapper>
        <FormInput type="text" placeholder="Publication Date*" onChange={handleChange('publicationDate')}/>
        <FormInput type="text" placeholder="Stock*" onChange={handleChange('stock')}/>
      </InnerFormWrapper>
      <FormButton type="submit">Add</FormButton>
    </FormWrapper>
  );
}

const AddBook = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  }
  return (
    <>
      <NavButton onClick={handleOpen}>
        Add Book
      </NavButton>
      {
        isOpen && (
          <PopUp onClose={handleClose}>
            <AddForm onClose={handleClose} />
          </PopUp>
        )
      }
    </>
  )
}

export default AddBook;