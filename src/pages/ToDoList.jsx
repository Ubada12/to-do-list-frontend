import React from 'react';
import { Box } from '@mui/material';
import ToDoForm from '../components/ToDoForm';
import ToDoTasksList from '../components/ToDoTasksList';
import { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const TodoList = () => {
  const [changesDetected, setChangesDetected] = React.useState(false);
  const { getAccessTokenSilently } = useAuth0();
  // Function to update changesDetected from ToDoForm
  const handleChangesDetected = (newChangesDetected) => {
    setChangesDetected(newChangesDetected);
    console.log(changesDetected);
  };

  useEffect(() => {
    const initAndSend = async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: 'https://dev-f5h4m5nvswxd5wj0.us.auth0.com/api/v2/',
        });
        
        const res = await fetch('https://to-do-list-backend-hazel.vercel.app/auth/init', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          // No need to send email manually!
          body: JSON.stringify({})
        });
        const data = await res.json();
        console.log('🔑 Init:', data);
      } catch (error) {
        console.error('❌ Auth init failed:', error);
      }
    };
  
    initAndSend();
      }, []);
      
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to left, #e6e6fa, #add8e6)',
        padding: { xs: 2, sm: 4 },
        // Add smooth transition for any theme changes
        transition: 'background 0.3s ease-in-out'
      }}
    >
      <ToDoForm onChangesDetected={handleChangesDetected} />
      <ToDoTasksList changesDetected={changesDetected} />
    </Box>
  );
};

export default TodoList;