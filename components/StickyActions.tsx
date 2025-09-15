import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';
import React from 'react';

const StickyActions: React.FC = () => (
  <Box
    sx={{
      position: 'fixed',
      bottom: 24, // Align with WhatsApp widget bottom position
      right: 16, // Align with WhatsApp widget right position (16px = 4 in Tailwind)
      zIndex: 40, // Lower than WhatsApp widget (z-50) but higher than content
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      // Responsive adjustments for different screen sizes
      '@media (max-width: 640px)': {
        bottom: 20,
        right: 16, // Match WhatsApp right-4 (16px)
        gap: 1.5,
      },
      '@media (max-width: 480px)': {
        bottom: 20,
        right: 16, // Match WhatsApp right-4 (16px)
        gap: 1,
      },
      // Ensure it doesn't interfere with WhatsApp widget
      '@media (min-width: 641px)': {
        bottom: 24,
        right: 16, // Match WhatsApp right-4 (16px)
      },
    }}
  >
    <Tooltip title="Email Now" placement="left">
      <IconButton
        color="primary"
        sx={{
          bgcolor: '#e47b42',
          color: 'white',
          width: 56, // Increased to match WhatsApp button
          height: 56, // Increased to match WhatsApp button
          '&:hover': { 
            bgcolor: '#d36c36',
            transform: 'scale(1.05)',
          },
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          transition: 'all 0.2s ease-in-out',
          // Responsive sizing to match WhatsApp widget
          '@media (max-width: 640px)': {
            width: 48, // Match WhatsApp mobile size
            height: 48,
          },
          '@media (max-width: 480px)': {
            width: 48, // Match WhatsApp mobile size
            height: 48,
          },
        }}
        href="mailto:sales@ducorr.com"
      >
        <EmailIcon />
      </IconButton>
    </Tooltip>
  </Box>
);

export default StickyActions; 