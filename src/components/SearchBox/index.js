import { useState, useMemo } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import { SearchCustom } from "./styles";

const SearchBox = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const keyword = useMemo (()=> {
        const searchParams = new URLSearchParams(location.search);
        return searchParams.has('keyword') ? searchParams.get('keyword') : '';
    },[location])

    const onSearch = (e) => {
        const value = e.target.value;
        navigate(`${location.pathname}?keyword=${value}`);
    }

    return <SearchCustom value={keyword} onChange={onSearch}/>
}

export default SearchBox;