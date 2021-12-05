import React from "react";
import { Input } from 'antd';
import {
    SearchOutlined,
} from '@ant-design/icons';
import GlobalContext from '../../../contexts/GlobalState'

import { useContext} from 'react';

const HeaderSearch = () => {
    let { setDataRender } = useContext(GlobalContext);
    const { cups } = useContext(GlobalContext);



    const searchCups = (value) => {
        let searchedData = Array.from(cups);
        setDataRender(
            searchedData.filter(cup =>
            (Object.keys(cup).slice(1, 4).some(key =>
                cup[key].toLowerCase().includes(value.toLowerCase())))))
    }
    

    return (<Input
        prefix={<SearchOutlined style={{ marginRight: 10 }} />}
        placeholder="Type something..."
        allowClear
        enterButton="Search"
        size="large"
        onChange={(event) => searchCups(event.target.value)}
        style={{ width: 304, borderRadius: 20 }}
    />
    )
}

export default HeaderSearch;