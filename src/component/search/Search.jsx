// import React from 'react'
// import { Input } from 'antd'
// import './Search.css'

// const { Search: AntSearch } = Input

// const Search = () => {
//   return (
//     <div className='search container'>
//         <h3 className='search-title'>hghbj</h3>
//         <p className='search-p'>vfj</p>
//         <div id='my-input'>
//             <AntSearch
//             placeholder='Search...'
//             allowClear onSearch={() = {
//                 console.log('search');
//             }} />
//         </div>
//     </div>
//   )
// }

// export default Search

import React from 'react';
import { Input } from 'antd';
import './Search.css';

const { Search: AntSearch } = Input;

const Search = () => {
  return (
    <div className='search container'>
        <h3 className='search-title'>hghbj</h3>
        <p className='search-p'>vfj</p>
        <div id='my-input'>
            <AntSearch
                placeholder='Search...'
                allowClear
                onSearch={() => {
                    console.log('search');
                }}
                enterButton
            />
        </div>
    </div>
  );
};

export default Search;
