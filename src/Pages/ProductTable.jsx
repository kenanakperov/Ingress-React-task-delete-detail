import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductTable = () => {
  const navigate = useNavigate()
    const [productData,setProductData] = useState([])
    const [refresh, setRefresh] = useState(true);
    
    useEffect(() => {
        axios('http://localhost:3009/get-data').then((res) => {
          setProductData(res.data.data);
        })},[refresh])

    const deleteFunc = (id)=>{
      axios.delete(`http://localhost:3009/items/${id}`).then((res) => {
        console.log(res)
        setRefresh(!refresh);
      })
    }    
  return (
    <div>
        <h1>A Fancy Table</h1>
        <table id="customers">

            <thead>
                <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Title</th>
                    <th>Detail</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
            {productData.map((item) => (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img className='image' src={item.image} alt={item.title} />
                </td>
                <td>{item.description.slice(0,60)}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.title.slice(0,20)}</td>
                <td><button onClick={()=>navigate(`/product-detail/${item.id}`)}>Detail</button></td>
                <td><button onClick={()=>deleteFunc(item.id)}>Delete</button></td>
              </tr>
            ))}
            </tbody>

        </table>
    </div>
  )
}

export default ProductTable