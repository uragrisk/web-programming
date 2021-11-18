import React from "react";
import { Input } from 'antd';

const { Search } = Input;


const onSearch = value => console.log(value);



const HeaderSearch = () => (
    <Search
        placeholder="Type something..."
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        style={{ width: 304, borderRadius: 20 }}
    />
);

export default HeaderSearch;