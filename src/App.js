import { Box } from '@mui/material';
import './App.css';
// import { Login } from './component/Login';
import { SearchBar } from './component/SearchBar';
import { SearchBarFilter } from './component/SearchBarFilter';
import { DateRange } from './component/DateRange'

function App() {
  return (
    <Box>
      {/* <SearchBar/>
      <SearchBarFilter/> */}
      <DateRange></DateRange>
    </Box>
  );
}

export default App;
