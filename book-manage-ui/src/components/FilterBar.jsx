import { Wrapper, Input, Selector } from '../styles/filterBar';
import { useDataContext } from '../context/DataProvider';

const FilterBar = () => {
  const {
    setSearchTerm,
    setSearchBy
  } = useDataContext();

  const handleSelectorChange = (e) => {
    setSearchBy(e.target.value);
  }

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  }


  return (
    <Wrapper>
      <Input type="text" placeholder="Search..." onChange={handleInputChange}/>
      <Selector onChange={handleSelectorChange}>
        <option value="Title" selected>By Title</option>
        <option value="ISBN">By ISBN</option>
        <option value="Author">By Author</option>
        <option value="Genre">By Genre</option>
      </Selector>
    </Wrapper>
  )
};

export default FilterBar;