import { useEffect, useCallback, useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ProductCard from '@app/components/Product'
import { getAllProducts } from '@app/services/products'
import { IProducts } from '@app/types/products'
import storage from '@app/utils/storage'
import { title } from './styles'

const Home = () => {
  const [products, setProducts] = useState<IProducts[]>([])

  const onLoadData = useCallback(async () => {
    const { data, status } = await getAllProducts()

    if (status === 200 && data.products.length > 0) {
      const parser = data.products.map(product => ({
        ...product,
        favorite: false
      }))

      storage.save('@ML:Products', parser)
      setProducts(parser)
    }
  }, [])

  useEffect(() => {
    const products = storage.getObjectToken('@ML:Products') as IProducts[]
    
    products && Object?.keys(products)?.length === 0 ? onLoadData() : setProducts(products)
  }, [onLoadData])

  const onSelectedWishlist = useCallback((item: IProducts) => {
    const prevState = [...products]
    prevState[item.id].favorite = true
    storage.save('@ML:Products', prevState)
    setProducts(prevState)
  }, [products])
 

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography sx={title}>Home</Typography>
      </Grid>
      {products?.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <ProductCard product={product} onSelectedWishlist={onSelectedWishlist} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Home