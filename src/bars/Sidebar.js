import React, { useState }  from 'react'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { NavLink } from 'react-router-dom';
import { tokens } from '../Theme';


function Sidebar() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard')

 
  return ( 
    <Box sx={{ minHeight:'100vh',
    // to know the class name of any the component go to inspect element an on visiting element section we can find the class name of that particular section 
      "& .pro-sidebar-inner": {
        background: `${colors.primary[400]} !important`,
      },
      "& .pro-inner-item:hover": {
        color: "#868dfb !important",
      },
    }}>
      
      <ProSidebar collapsed={isCollapsed} >
       
        <Menu >
        <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : ''}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
        </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Anubhav Singh 
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <MenuItem icon = {<HomeOutlinedIcon/>}
            className={selected === 'Dashboard' ? 'active-item' : ''}
            onClick={() => setSelected('Dashboard')}>
            Dashboard
            <NavLink to='/'/>
          </MenuItem>
          
          <Typography
              fontSize='14px' fontWeight='600'
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
          </Typography>
          
          <MenuItem icon = {<PeopleOutlinedIcon />}
           className={selected === 'Manage Team' ? 'active-item' : ''}
           onClick={() => setSelected('Manage Team')}>Manage Team
            <NavLink to='/Team' />
          </MenuItem>

          <MenuItem icon = {<ContactsOutlinedIcon/>}
          className={selected === 'Contacts Information' ? 'active-item' : ''}
          onClick={() => setSelected('Contacts Information')}>Contacts Information
            <NavLink to='/Contacts' />
          </MenuItem>

          <MenuItem icon = {<ReceiptOutlinedIcon/>}
          className={selected === 'Invoices Balances' ? 'active-item' : ''}
          onClick={() => setSelected('Invoices Balances')}>Invoices Balances
            <NavLink to='/Invoices' />
          </MenuItem>
         

          <Typography
              fontSize='14px' fontWeight='600'
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
          </Typography>

          <MenuItem icon = {<PersonOutlinedIcon/>}
            className={selected === 'Profile Form' ? 'active-item' : ''}
            onClick={() => setSelected('Profile Form')}>Profile Form
            <NavLink to='/Form' />
          </MenuItem>
          
          <MenuItem icon = {<CalendarTodayOutlinedIcon/>}
           className={selected === 'Calendar' ? 'active-item' : ''}
           onClick={() => setSelected('Calendar')}>Calendar
            <NavLink to='/Calendar' />
          </MenuItem>

          <MenuItem icon = {<HelpOutlineOutlinedIcon/>}
           className={selected === 'FAQ Page' ? 'active-item' : ''}
           onClick={() => setSelected('FAQ Page')}>FAQ Page
            <NavLink to='/FAQ' />
          </MenuItem>

          <Typography
              fontSize='14px' fontWeight='600'
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
          </Typography>

          <MenuItem icon = {<BarChartOutlinedIcon/>}
           className={selected === 'Bar Chart' ? 'active-item' : ''}
           onClick={() => setSelected('Bar Chart')}>Bar Chart
            <NavLink to='/Bar' />
          </MenuItem>

          <MenuItem icon = {<TimelineOutlinedIcon/>}
           className={selected === 'Line Chart' ? 'active-item' : ''}
           onClick={() => setSelected('Line Chart')}>Line Chart
            <NavLink to='/Line' />
            </MenuItem>

          <MenuItem icon = {<PieChartOutlineOutlinedIcon />} 
            className={selected === 'Pie Chart' ? 'active-item' : ''}
            onClick={() => setSelected('Pie Chart')}>Pie Chart
            <NavLink to='/Pie' />

          </MenuItem>
          <MenuItem icon = {<MapOutlinedIcon />} className={selected === 'Geography Chart' ? 'active-item' : ''}
            onClick={() => setSelected('Geography Chart')}>Geography Chart
            <NavLink to='/Geography' />
          </MenuItem>
         
          
        </Menu>
      </ProSidebar>
      
    </Box>
  )
}

export default Sidebar