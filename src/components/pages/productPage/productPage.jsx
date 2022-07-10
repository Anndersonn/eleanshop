import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedProduct } from '../../../redux/actions/productActions'

export default function ProductPage() {

    const product = useSelector(state => state.currentProduct.products)
    console.log(product)
    const { productId } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos/${productId}`).then((response) => {
            dispatch(selectedProduct(response.data))
        })
    }, [productId])


    return (
        <div>productPage</div>
    )
}
