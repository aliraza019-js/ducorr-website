const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

console.log('🚀 Starting Ducorr WhatsApp Bot...');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

client.on('qr', (qr) => {
  console.log('📱 QR Code received. Scan this with your WhatsApp app:');
  qrcode.generate(qr, { small: true });
  console.log('\n💡 After scanning, the bot will be ready to receive messages!');
});

client.on('ready', () => {
  console.log('✅ Ducorr WhatsApp Bot is ready and online!');
  console.log('🤖 Bot will now respond to messages automatically.');
});

client.on('message', async (message) => {
  try {
    const contact = await message.getContact();
    console.log(`📨 Received message from ${contact.name || contact.number}: ${message.body}`);
    
    // Ducorr-specific responses
    let response = '';
    const messageBody = message.body.toLowerCase().trim();

    if (messageBody.includes('hello') || messageBody.includes('hi') || messageBody.includes('hey')) {
      response = `Hello! Welcome to Ducorr. I'm here to help you with information about our corrosion protection solutions. How can I assist you today?`;
    } else if (messageBody.includes('services') || messageBody.includes('products')) {
      response = `We offer several corrosion protection solutions:

🔹 PlatePro - Advanced cathodic protection systems
🔹 TankBox - Underground storage tank protection
🔹 MarineShield - Marine corrosion protection
🔹 PowerCell - Power generation protection
🔹 PowerTide - Tidal energy protection
🔹 UniCell - Universal protection systems

Which service interests you most?`;
    } else if (messageBody.includes('contact') || messageBody.includes('phone') || messageBody.includes('email')) {
      response = `You can reach us at:

📞 Phone: +971 6 557 8517
📧 Email: sales@ducorr.com
🌐 Website: www.ducorr.com
📍 Address: Dubai, UAE

Would you like to schedule a consultation?`;
    } else if (messageBody.includes('price') || messageBody.includes('cost') || messageBody.includes('quote')) {
      response = `For pricing information and quotes, please contact our sales team directly. They can provide customized pricing based on your specific requirements.

Would you like me to connect you with our sales team?`;
    } else if (messageBody.includes('about') || messageBody.includes('company')) {
      response = `Ducorr is a leading provider of corrosion protection solutions in the Middle East. We specialize in:

✅ Cathodic Protection Systems
✅ Underground Storage Tank Protection
✅ Marine Corrosion Solutions
✅ Power Generation Protection
✅ Custom Engineering Solutions

Visit our website to learn more about our projects and expertise!`;
    } else if (messageBody.includes('help')) {
      response = `I can help you with information about:

🔹 Our services and products
🔹 Contact information
🔹 Company information
🔹 Pricing and quotes
🔹 Technical support

What would you like to know?`;
    } else {
      response = `Thank you for your message! I'm here to help with information about Ducorr's corrosion protection solutions.

You can ask me about:
- Our services and products
- Contact information
- Company details
- Pricing and quotes

How can I assist you today?`;
    }

    if (response) {
      await message.reply(response);
      console.log(`✅ Replied to ${contact.name || contact.number}`);
    }
  } catch (error) {
    console.error('❌ Error handling message:', error);
  }
});

client.on('disconnected', (reason) => {
  console.log('⚠️ WhatsApp bot disconnected:', reason);
});

// Initialize the client
client.initialize().catch(console.error);

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down WhatsApp bot...');
  await client.destroy();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Shutting down WhatsApp bot...');
  await client.destroy();
  process.exit(0);
});
