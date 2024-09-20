import { useDataContext } from "../context/DataProvider";
import { Wrapper, ListContainer, ListHeaderItem } from "../styles/dataList";
import ListCard from "./BookCard";
import ListItem from "./ListItem";

const DataList = () => {
  const { filteredData } = useDataContext();
  
  return (
    <Wrapper>
      <ListContainer>
          <ListHeaderItem>Entry ID</ListHeaderItem>
          <ListHeaderItem>Title</ListHeaderItem>
          <ListHeaderItem>Author</ListHeaderItem>
          <ListHeaderItem>Genre</ListHeaderItem>
          <ListHeaderItem>ISBN</ListHeaderItem>
          <ListHeaderItem>Publication Date</ListHeaderItem>
          <ListHeaderItem>Stock</ListHeaderItem>
          <ListHeaderItem>Action</ListHeaderItem>
      </ListContainer>
      {
        filteredData.length > 0 ? (
          filteredData.map((data) => (
            <>
              <ListItem key={data.entryId} data={data} />
              <ListCard key={data.entryId} data={data} />
            </>
          ))
        ) : (
          <p>No books found</p>
        )
      }
    </Wrapper>
  );
}

export default DataList;