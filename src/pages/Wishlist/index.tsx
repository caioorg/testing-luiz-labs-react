import React, { useEffect, useState, useCallback } from 'react'
import Grid from '@mui/material/Grid'
import ProductCard from '../../components/Product'
import { IProducts } from '../../types/products'
import storage from '../../utils/storage'

const Wishlist: React.FC = () => {
  const [wishlist, setWishList] = useState<IProducts[]>()
  
  useEffect(() => {
    const products = storage.getObjectToken('@ML:Products') as IProducts[]

    products && setWishList(products)
  }, [])

  const onSelectedWishlist = useCallback((item: IProducts) => {
    const prevState = [...wishlist]
    prevState[item.id].favorite = false
    setWishList(prevState)
    storage.save('@ML:Products', prevState) as IProducts[]
  }, [wishlist])

  return (
    <Grid container spacing={3}>
      {wishlist?.filter(product => product.favorite)?.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <ProductCard product={product} onSelectedWishlist={onSelectedWishlist} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Wishlist;