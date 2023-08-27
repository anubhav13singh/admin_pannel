import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";
import Topbar from "./bars/Topbar";
import Sidebar from "./bars/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import Contacts from "./pages/Contacts";
import Invoices from "./pages/Invoices";
import Calendar from "./pages/Calendar";
import Bar from "./pages/Bar";
import FAQ from "./pages/FAQ";
import Form from "./pages/Form";
import Geography from "./pages/Geography";
import Line from "./pages/Line";
import Pie from "./pages/Pie";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box display='flex'>
         <Sidebar />
         <Box>
           <Topbar />
            <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Invoices" element={<Invoices />} />
            <Route path="/Bar" element={<Bar />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/Line" element={<Line />} />
            <Route path="/Pie" element={<Pie />} />
            <Route path="/Geography" element={<Geography />} />
            <Route path="/Calendar" element={<Calendar />} />
            <Route path="/FAQ" element={<FAQ />} /> 
           </Routes> 
         </Box>
       
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

