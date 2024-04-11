import React, { useEffect, useState } from 'react'
import './ProductList.css';
const ProductList = () => {
    const [category,setCategory] = useState([])
    const [productDetails,setProductDetails] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([]);

    useEffect(() => {
        const FetchData = async() => {
          try {
            const url = 'https://fakestoreapi.com/products/categories';
            const response = await fetch(url);
            const data = await response.json();
            setCategory(data);
          } catch (error) {
            console.log(error)
          }
        }
        FetchData()
    },[])

    useEffect(() => {
        const FetchProductDetails = async() => {
            try {
                const productsurl = 'https://fakestoreapi.com/products';
                const res = await fetch(productsurl)
                const productdetails = await res.json()
                console.log(productdetails);
                setProductDetails(productdetails);
            } catch (error) {
                console.log(error);
            }
        }
        FetchProductDetails()
    },[])

    const CategoryChangeHanlder = (category) =>{
        setSelectedCategories(prev=>{
          if(prev.includes(category)){
            return prev.filter(cat => cat !== category);
          }else{
            return [...prev,category]
          }
        })
    }

    const FilteredProducts = selectedCategories.length>0 ? productDetails.filter(product => selectedCategories.includes(product.category))
    : productDetails;

  return (
    <div className='product-list'>
      <div>
        <h1>Filter</h1>
        {category.map((item,index)=>(
            <div key={index}>
                <input type='checkbox' id={`category-${index}`} onClick={() => CategoryChangeHanlder(category)} checked={selectedCategories.includes(item)}
            onChange={() => CategoryChangeHanlder(item)}/>
                <label htmlFor={`category-${index}`}> {item}</label>
            </div>
        ))}
      </div>
      <div className='product-card-container'>
        {FilteredProducts.map((item,index)=>(
          <div className='product-card' key={index}>
            <img src={item.image} className='product-image'/>
            <h5>{item.title}</h5>
            <h6>Price: {item.price}</h6>
            <p>Rating: {item.rating.rate}({item.rating.count})</p>
            <button>View More</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
