import { useEffect, useState } from 'react';
import axios from "axios";
const useFetch = (url) => {
    const [product, setProduct] = useState([])
    const getProduct = async () => {
        try{
            const data = await axios.get(url);
            setProduct(data);
        }catch(err){
            alert(err)
        }
    }
    useEffect(()=> {
        getProduct();
    }, [])
    return product;

};

export default useFetch;