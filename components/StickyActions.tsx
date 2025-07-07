import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Box from '@mui/material/Box';
import React from 'react';

const StickyActions: React.FC = () => (
  <Box
    sx={{
      position: 'fixed',
      top: '50%',
      right: 24,
      transform: 'translateY(-50%)',
      zIndex: 1300,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    }}
  >
    <Tooltip title="Email Now" placement="left">
      <IconButton
        color="primary"
        sx={{
          bgcolor: '#e47b42',
          color: 'white',
          mb: 1,
          '&:hover': { bgcolor: '#d36c36' },
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        }}
        href="mailto:info@ducorr.com"
      >
        <EmailIcon />
      </IconButton>
    </Tooltip>
    <Tooltip title={"+971 50 168 2057"} placement="left">
      <IconButton
        color="primary"
        sx={{
          bgcolor: '#e47b42',
          color: 'white',
          '&:hover': { bgcolor: '#d36c36' },
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        }}
        href="tel:+971501682057"
      >
        <PhoneIcon />
      </IconButton>
    </Tooltip>
  </Box>
);

export default StickyActions; 