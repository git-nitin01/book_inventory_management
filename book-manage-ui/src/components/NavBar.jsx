import {
  Wrapper,
  Left,
  Right,
  NavButton
} from '../styles/NavBar';
import { AppHeader } from '../styles/common';
import AddBook from './AddBook';
import { useDataContext } from '../context/DataProvider';

const NavBar = () => {
  const { data } = useDataContext();

  const handleDownload = () => {
    const dataStr = JSON.stringify(data);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const exportFileDefaultName = 'bookData.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }

  return (
    <Wrapper>
      <Left>
        <AppHeader>Get My Book</AppHeader>
      </Left>
      <Right>
        <AddBook />
        {/* add a button to download json format of data */}
        <NavButton onClick={handleDownload}>Export</NavButton>
      </Right>
    </Wrapper>
  );
}

export default NavBar;