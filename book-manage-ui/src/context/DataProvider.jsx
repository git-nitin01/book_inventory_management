import react, { createContext, useState, useContext, useEffect } from 'react';
import {
  getAllData,
  addData,
  editData,
  deleteData
} from '../ApiCallers/Callers';
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('Title');

  // fetch data from the server
  useEffect(() => {
    getAllData()
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(()=>{
    setFilteredData(data)
  }, [data])

  useEffect(()=>{
    if(searchTerm === ''){
      setFilteredData(data)
    } else {
      handleSearch();
    }
  }, [searchTerm])

  const handleSearch = () => {
    const filtered = data.filter((entry) => {
      return entry[searchBy.toLowerCase()].toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredData(filtered);
  }

  const handleEdit = (newData) => {
    editData(newData).then((response) => {
      console.log(`Book edited: ${response.data}`);
    }).catch((err) => {
      console.error(`Error editing book: ${err}`);
    });
  }

  const handleAdd = (newData) => {
    data.length >= 1 ? newData.entryId = data[data.length-1].entryId + 1 : newData.entryId = 1;
    addData(newData).then((response) => {
      setData([...data, newData]);
      console.log(`Book added: ${response.data}`);
    }).catch((err) => {
      console.error(`Error adding book: ${err}`);
    })
  }

  const handleDelete = (entryId) => {
    deleteData(entryId).then((response) => {
      setData(data.filter(entry => entry.entryId !== entryId));
      console.log(`Book deleted: ${response.data}`);
    }).catch((err) => {
      console.error(`Error deleting book: ${err}`);
    })
  }

  return (
    <DataContext.Provider value={{ 
      data,
      setData,
      filteredData,
      searchTerm,
      searchBy,
      handleSearch,
      handleEdit,
      handleAdd,
      setSearchTerm,
      setSearchBy,
      handleDelete
    }}>
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = () => useContext(DataContext);
