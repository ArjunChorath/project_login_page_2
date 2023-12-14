import { Box } from '@mui/material';
import './App.css';
// import { Login } from './component/Login';

import { SearchBar } from './component/SearchBar';
import { SearchBarFilter } from './component/SearchBarFilter';



import PaginationFooter from './component/PaginationComponents/PaginationFooter';





function App() {
  return (
    <Box>
       {/* <SearchBar/> */}
       <SearchBarFilter/>
    
    
      {/* <SvgDemo></SvgDemo> */}
      
      <PaginationFooter/>

      
    </Box>
  );
}

export default App;
