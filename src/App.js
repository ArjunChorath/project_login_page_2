import { Box } from '@mui/material';
import './App.css';
// import { Login } from './component/Login';
import { SearchBar } from './component/SearchBar';
import { SearchBarFilter } from './component/SearchBarFilter';

import { SvgDemo } from './component/SvgDemo';




function App() {
  return (
    <Box>
       <SearchBar/>
       <SearchBarFilter/>
    
    
      {/* <SvgDemo></SvgDemo> */}
    </Box>
  );
}

export default App;
