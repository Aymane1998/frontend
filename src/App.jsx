import { useState } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import { Typography, Button } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <Box className="card">
        <Button
          variant="contained"
          color="success"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
      </Box>
    </>
  );
}

export default App;
