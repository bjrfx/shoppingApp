import { Box, Grid } from "@mui/material";
import ItemNames from "./components/ItemNames.component";

function App() {
  return (
    <Box>
      {/* For small (sm) screens, show 2 items */}
      <Grid container spacing={2}>
         <ItemNames />
      </Grid>
    </Box>
  );
}

export default App;
