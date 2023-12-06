import { Box } from '@mui/material';
import './App.css';
// import { Login } from './component/Login';
import { SearchBar } from './component/SearchBar';
import { SearchBarFilter } from './component/SearchBarFilter';

function App() {
  return (
    <Box>
      {/* <SearchBar/> */}
      <SearchBarFilter/>
    </Box>
  );
}

export default App;
