import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../Theme'

function Header({title, subtitle}) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

  return (
    <Box mb='3rem' ml='2rem'>
        <Typography 
          fontSize='25px'
          color={colors.grey[100]}
          fontWeight='bold'
          mb='5px'>
            {title}
        </Typography>
        <Typography 
          fontSize='15px'
          color={colors.greenAccent[400]}
          fontWeight='600'
          mb='5px'>
            {subtitle}
        </Typography>
    </Box>
  )
}

export default Header