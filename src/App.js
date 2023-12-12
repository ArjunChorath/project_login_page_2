import { Box } from '@mui/material';
import './App.css';
// import { Login } from './component/Login';
import {Pagination} from './component/PaginationComponents/Pagination'
import { SearchBar } from './component/SearchBar';
import { SearchBarFilter } from './component/SearchBarFilter';

import { SvgDemo } from './component/SvgDemo';
import MyComponent from './component/PaginationComponents/MyComponent';
import SelectBox from './component/SelectBox';





function App() {
  return (
    <Box>
       {/* <SearchBar/> */}
       <SearchBarFilter/>
    
    
      {/* <SvgDemo></SvgDemo> */}
      {/* <Pagination></Pagination> */}
      <MyComponent></MyComponent>
      <SelectBox/>
      
    </Box>
  );
}

export default App;
