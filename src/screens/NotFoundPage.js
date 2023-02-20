import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: "#E3E6F3",
            }}
        >
            <Typography variant="h1" style={{ color: "#222" }}>
                404
            </Typography>
            <Typography variant="h6" style={{ color: "#222" }}>
                La página que buscas no existe.
            </Typography>
            <Button 
                variant="contained" 
                style={{
                    backgroundColor: "#00D5FA",
                    color: "#222",
                    fontWeight: "600",
                    "&:hover": { color: "#00D5FA" }
                }}
                onClick={() => {
                    navigate("/");
                    navigate(0);
                }}
            >
               Volver
            </Button>
        </Box>
    );
};

export default NotFoundPage;