import React,{useState,useEffect} from 'react'
import axios from 'axios'

function ProductList() {
    const [product,setProduct] = useState([])
    useEffect(()=>{
        fetchData() 
    },[])

    const fetchData = async()=>{
        try{
            let res = await axios.get('https://api.escuelajs.co/api/v1/products')
            setProduct(res.data)
            console.log(res.data);
        }
        catch(error){
          console.error("Error al traer los products",error);
        }}
        return (
            <div>
                <h1>Product List</h1>
                <ul>
                   {
                    product.map(product=>(
                        <li key={product.id}>
                            <img width={'200px'} src={product.images} alt={product.title} />
                            <p>{product.title}</p>
                        </li>
                    ))
                   }
                </ul>
            </div>
          )
        }
        
        export default ProductList 