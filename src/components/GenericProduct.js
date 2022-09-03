import React,{useContext, useState, useEffect} from 'react'
import { ProductContext } from '../context/ProductContext'
import { types } from '../types/types'

export const GenericProduct = ({ productName,id }) => {

    const {dispatch,dispatchQuantity,dispatchId,dispatchIdPlusMinus, idPlusMinus}  = useContext(ProductContext)

    const [quantity, setQuantity] = useState(0)  

    useEffect(() => {        
        (id !== +Object.values(idPlusMinus)) && setQuantity(0)
    }, [idPlusMinus,id]) 
    

    const handlePlus = () => {
        setQuantity(quantity + 1)
        dispatchQuantity({
            type: types.quantity,
            payload: {
                quantity:quantity +1
            }
        })
        dispatchIdPlusMinus({
            type: types.idPlusMinus,
            payload: {
                idPlusMinus:id
            }
        })
        dispatch({
            type: types.product,
            payload: {
                productName
            }
        })
        
    }
    const handleMinus = () => {
        (quantity > 0) && setQuantity(quantity - 1)
        dispatchQuantity({
            type: types.quantity,
            payload: {
                quantity: (quantity > 0) ? quantity - 1 : 0
            }
        })
        dispatchIdPlusMinus({
            type: types.idPlusMinus,
            payload: {
                idPlusMinus:id
            }
        })
        dispatch({
            type: types.product,
            payload: {
                productName
            }
        })
    }

    const handleChoose = () => {        
        dispatch({
            type: types.product,
            payload: {
                productName
            }
        })
        dispatchId({
            type: types.id,
            payload: {
                id
            }
        })
            
        
        
    }



  return (
      <>
          <div className='product-sell'>
              <h3>{productName}</h3>
              <button className='ml-5' onClick={handleChoose}>Choose</button>
          </div>
          <div className='btn-select'>
              <button onClick={handleMinus}>-</button>
              {quantity}
              <button onClick={handlePlus}>+</button>
          </div>
          
      </>
  )
}
