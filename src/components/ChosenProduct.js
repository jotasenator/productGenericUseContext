import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/ProductContext'

export const ChosenProduct = () => {

    const { productName,quantity,id } = useContext(ProductContext)

    const [product, setProduct] = useState('')
    const [quantityProduct, setQuantityProduct] = useState(0)

    useEffect(() => {
        setProduct(Object.values(productName))
        setQuantityProduct(0)
    }, [productName,id])
    useEffect(() => {
        setQuantityProduct(Object.values(quantity))
    }, [quantity])
    
    

  return (
      <>
            {product.length >0 && <h2> Chosen product</h2>}

      <h2><span className='mr-5'>{product.length > 0 && quantityProduct}</span>{product}</h2>

      </>
  )
}
