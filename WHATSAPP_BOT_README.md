# Ducorr WhatsApp Bot Integration

This project includes a complete WhatsApp chatbot integration for Ducorr's corrosion protection solutions website.

## Features

- 🤖 **Intelligent Bot Responses**: Automated responses to common queries about Ducorr's services
- 📱 **Responsive Chat Widget**: Mobile-friendly chat interface that works on all screen sizes
- 🔄 **Real-time Messaging**: Live chat functionality with typing indicators
- 📞 **WhatsApp Integration**: Direct WhatsApp redirect functionality
- 🎨 **Modern UI**: Beautiful, responsive design that matches Ducorr's branding
- ⚡ **Fast Performance**: Optimized for speed and user experience

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server with WhatsApp Bot
```bash
npm run whatsapp:dev
```

This will start both:
- Next.js development server (http://localhost:3000)
- WhatsApp bot service

### 3. Initialize WhatsApp Bot
1. Open your browser and go to http://localhost:3000
2. Look for the green WhatsApp button in the bottom-right corner
3. Click on it to open the chat widget
4. The bot will automatically initialize and show a QR code in the terminal
5. Scan the QR code with your WhatsApp mobile app
6. Once connected, the bot will be ready to receive messages

## Available Scripts

- `npm run dev` - Start Next.js development server only
- `npm run whatsapp` - Start WhatsApp bot only
- `npm run whatsapp:dev` - Start both Next.js server and WhatsApp bot
- `npm run build` - Build the production version
- `npm run start` - Start production server

## Bot Capabilities

The WhatsApp bot can respond to queries about:

### Services & Products
- PlatePro (Advanced cathodic protection systems)
- TankBox (Underground storage tank protection)
- MarineShield (Marine corrosion protection)
- PowerCell (Power generation protection)
- PowerTide (Tidal energy protection)
- UniCell (Universal protection systems)

### Company Information
- About Ducorr
- Contact details
- Location information
- Company expertise

### Support
- Pricing and quotes
- Technical support
- Consultation scheduling

## Chat Widget Features

### Responsive Design
- **Mobile**: Optimized for small screens with touch-friendly interface
- **Tablet**: Medium screen optimization with balanced layout
- **Desktop**: Full-featured chat interface with quick actions

### User Experience
- **Typing Indicators**: Shows when the bot is responding
- **Message Timestamps**: Displays when each message was sent
- **Quick Actions**: Direct buttons for calling, emailing, and location
- **WhatsApp Redirect**: One-click to open WhatsApp with pre-filled message

### Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Compatible with assistive technologies
- **High Contrast**: Clear visual indicators and readable text
- **Focus Management**: Proper focus handling for accessibility

## API Endpoints

The bot includes several API endpoints for management:

- `GET /api/whatsapp/status` - Get bot connection status
- `POST /api/whatsapp/initialize` - Initialize the bot
- `POST /api/whatsapp/send` - Send a message via the bot

## Configuration

### Phone Number
Update the phone number in the WhatsAppWidget component:
```tsx
<WhatsAppWidget phoneNumber="+97141234567" />
```

### Default Message
Customize the default message sent when users click "Open WhatsApp":
```tsx
<WhatsAppWidget message="Hello! I'm interested in Ducorr's services." />
```

### Bot Responses
Modify bot responses in `/lib/whatsapp-bot.ts` or `/components/WhatsAppWidget.tsx`

## File Structure

```
├── components/
│   └── WhatsAppWidget.tsx          # Main chat widget component
├── lib/
│   └── whatsapp-bot.ts             # WhatsApp bot service
├── app/api/whatsapp/
│   ├── status/route.ts             # Bot status API
│   ├── initialize/route.ts         # Bot initialization API
│   └── send/route.ts               # Send message API
├── scripts/
│   └── start-whatsapp-bot.js       # Standalone bot script
└── WHATSAPP_BOT_README.md          # This file
```

## Troubleshooting

### Bot Not Connecting
1. Make sure you have a stable internet connection
2. Check that WhatsApp Web is not already open in another browser
3. Try restarting the bot: `npm run whatsapp`
4. Clear the session data and re-scan the QR code

### QR Code Not Showing
1. Check the terminal output for any error messages
2. Ensure all dependencies are installed: `npm install`
3. Try running the bot separately: `npm run whatsapp`

### Chat Widget Not Appearing
1. Make sure the component is imported in your layout
2. Check browser console for any JavaScript errors
3. Verify the component is not hidden by CSS

### Performance Issues
1. The bot uses Puppeteer which can be resource-intensive
2. Consider running the bot on a separate server for production
3. Monitor memory usage and restart if needed

## Production Deployment

For production deployment:

1. **Separate Bot Service**: Run the WhatsApp bot as a separate service
2. **Environment Variables**: Use environment variables for configuration
3. **Database Integration**: Consider adding message logging to a database
4. **Monitoring**: Add logging and monitoring for the bot service
5. **Security**: Implement proper authentication for API endpoints

## Support

For technical support or questions about the WhatsApp bot integration, please contact the development team.

---

**Note**: This WhatsApp bot integration is designed specifically for Ducorr's corrosion protection solutions and includes customized responses for the company's services and products.



