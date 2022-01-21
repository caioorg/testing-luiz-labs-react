import React from 'react';
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { root } from './styles'

const Loading: React.FC = () => {
  return (
    <Box sx={root}>
      <CircularProgress />
    </Box>
  )
}

export default Loading;