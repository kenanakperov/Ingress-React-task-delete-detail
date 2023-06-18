import React, { useState } from 'react'
import axios from 'axios'
import { useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'

const ProductDetail = () => {
  const {id} = useParams()
  const [cardData,setCardData] = useState([])
  useEffect(() => {
        axios(`http://localhost:3009/items/${id}`).then((res) => {
          setCardData(res.data)
        })},[])
  return (
    <div className='ProductDetail'>
      <ProductCard cardData={cardData} />
    </div>
  )
}

export default ProductDetail