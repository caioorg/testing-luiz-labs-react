import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { header, main, title, input, informations } from './styles'

interface MainProps {
  children: ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Box sx={header}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={5} sx={title}>
            <Link to='/'>MagaNets</Link>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={5}>
            <Box sx={informations}>
              <Typography>
                <FmdGoodIcon />
                Cidade: São Paulo
              </Typography>
              <Typography>
                <PhoneIcon />
                Central de atendimento
              </Typography>
              <Link to='/wishlist'>
                <FavoriteIcon />
                Lista de desejos
              </Link>
            </Box>
            <TextField sx={input} id="standard-basic" label="Buscar por Produto" variant="filled" fullWidth />
          </Grid>
        </Grid>
      </Box>
      <Box sx={main}>
        {children}
      </Box>
    </>
  )
}

export default Main;