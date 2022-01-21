import React from 'react'
import cls from 'classnames'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IProducts } from '../../types/products'
import { card, favorite, title, price } from './styles'

interface IProductProps {
  product: IProducts
  onSelectedWishlist: (item: IProducts) => void
}

const Product: React.FC<IProductProps> = ({ product, onSelectedWishlist }) => {

  return (
    <Box sx={card}>
      <Box className={cls({'active': product.favorite })} sx={favorite} onClick={() => onSelectedWishlist(product)}>
        <FavoriteIcon fontSize="large" />
      </Box>
      <img src={product.image} alt={product.description} />
      <Typography sx={title}>{product.title}</Typography>
      <Typography sx={price}>
        {product.price.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL' 
        })}
      </Typography>
    </Box>
  )
}

export default Product;