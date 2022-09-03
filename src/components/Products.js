import React from 'react'
import { GenericProduct } from './GenericProduct'

export const Products = () => {

    

    return (
      <>
            <h2 >All Products</h2>
            <GenericProduct productName={'black sneackers'} id={1} />
            <GenericProduct productName={'red t-shirt'} id={2} />
            <GenericProduct productName={'blue jeans'} id={3} />


        </>
  )
}
