import { useTheme, Box, IconButton, InputBase } from '@mui/material'
import React, { useContext } from 'react'
import { ColorModeContext, tokens } from '../Theme';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext); //used for toggling dark and light mode

  return (
    <Box display='flex' justifyContent='space-between'  p={2} >
    
    {/* search Bar */}
    <Box display='flex' bgcolor={colors.primary[400]} borderRadius='10px'>

      <InputBase sx={{ ml:'4', pl:'14px'}} placeholder='Search...' type='text' /> 
      <IconButton type='button'>
        <SearchOutlinedIcon/>
      </IconButton>

    </Box>


{/* ICONS */}
      <Box display='flex'  position={{sm:'absolute'}} right='20px' >

         <IconButton onClick={colorMode.toggleColorMode}>  
         {/* defined in theme.js */}
        {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon/>} 
        </IconButton>
         
        <IconButton >
        <PersonOutlineOutlinedIcon/>
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon/>
        </IconButton>
      </Box> 
          

    </Box>
  )
}

export default Topbar