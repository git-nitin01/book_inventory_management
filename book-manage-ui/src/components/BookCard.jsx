import { 
  BookCardWrapper,
  BookCardInput
} from "../styles/bookCard";
import { ActionButtons, ListText } from "../styles/dataList";
import { Button } from "../styles/common";
import { useState } from "react";
import { useDataContext } from "../context/DataProvider";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const EditableItem = ({ name, value, handleDataChange, isEditing}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInput = (e) => {
    setInputValue(e.target.value);
    handleDataChange(name, e.target.value)();
  };

  return (
    isEditing ? <ListText><b>{name.toUpperCase()}</b> : <BookCardInput
        type="text"
        name={name}
        value={inputValue}
        onChange={handleInput}
      /></ListText> : <ListText><b>{name.toUpperCase()}</b> : {inputValue}</ListText>
  )
}


const ListCard = ({ data }) => {
  const [itemData, setItemData] = useState(data);
  const [isChanged, setIsChanged] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { handleEdit, handleDelete } = useDataContext();

  const handleDataChange = (name, value) => () => {
    if (value === data[name]) {
      setIsChanged(false);
      return;
    }
    setItemData({
      ...itemData,
      [name]: value
    });
    setIsChanged(true);
  }

  const handleSave = () => {
    if (!isChanged) {
      setIsEditing(false);
      return;
    }
    handleEdit(itemData);
    setIsEditing(false);
    setIsChanged(false);
  }

  const handleRemove = () => {
    handleDelete(itemData.entryId);
  }

  return (
    <BookCardWrapper>
      {
        Object.entries(data).map(([key, value]) => (
          key === 'publicationDate' ? <EditableItem key={key} name={key} value={new Date(value).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })} 
            handleDataChange={handleDataChange} 
            isEditing={isEditing}
            isChanged={isChanged}
            /> : <EditableItem 
            key={key} 
            name={key} 
            value={value} 
            handleDataChange={handleDataChange}
            isEditing={isEditing}
            isChanged={isChanged}
            />
          ))
      }
      <ActionButtons>
        {
          isEditing ? (
            <>
              <Button color="rgba(0, 0, 0, 0.3)" width="90%" onClick={handleSave}>
                <SaveIcon />
              </Button>
              <Button width="90%" onClick={handleRemove}>
                <DeleteIcon />
              </Button>
            </>
          ) : (
            <Button width="90%" onClick={() => setIsEditing(true)}>
              <EditIcon />
            </Button>
          )
        }
      </ActionButtons>
    </BookCardWrapper>
  );
}

export default ListCard;