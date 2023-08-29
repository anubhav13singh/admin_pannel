import { Box } from "@mui/material";
import BarChart from "../components/BarChart";
import Header from "../components/Header";

const Bar = () => {
  return (
    <Box >
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh" width='80vw'>
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;