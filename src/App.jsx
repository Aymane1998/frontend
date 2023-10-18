import { useState } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <Box className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is <code>{count}</code>
        </button>
      </Box>
    </>
  );
}

export default App;
