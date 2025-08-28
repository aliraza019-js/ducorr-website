import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
        href="mailto:sales@ducorr.com"
      >
        <EmailIcon />
      </IconButton>
    </Tooltip>
    <Tooltip title="Chat on WhatsApp" placement="left">
      <IconButton
        color="primary"
        sx={{
          bgcolor: '#25D366',
          color: 'white',
          '&:hover': { bgcolor: '#128C7E' },
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        }}
        href="https://wa.me/971501682057"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
      </IconButton>
    </Tooltip>
  </Box>
);

export default StickyActions; 