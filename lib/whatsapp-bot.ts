// WhatsApp bot functionality commented out for production build
// import { Client, Message, LocalAuth } from 'whatsapp-web.js';
// import qrcode from 'qrcode-terminal';

const CONTACT_NUMBER = process.env.WHATSAPP_CONTACT_NUMBER || '+971501682057';

class WhatsAppBot {
  // private client: Client;
  private isReady: boolean = false;
  private qrCode: string = '';

  constructor() {
    // WhatsApp bot functionality commented out for production build
    // this.client = new Client({
    //   authStrategy: new LocalAuth(),
    //   puppeteer: {
    //     headless: true,
    //     args: ['--no-sandbox', '--disable-setuid-sandbox']
    //   }
    // });

    // this.setupEventListeners();
  }

  private setupEventListeners() {
    // WhatsApp bot functionality commented out for production build
    // this.client.on('qr', (qr) => {
    //   this.qrCode = qr;
    //   console.log('QR Code received');
    //   qrcode.generate(qr, { small: true });
    // });

    // this.client.on('ready', () => {
    //   this.isReady = true;
    //   console.log('WhatsApp bot is ready!');
    // });

    // this.client.on('message', (message) => {
    //   this.handleMessage(message);
    // });

    // this.client.on('disconnected', () => {
    //   this.isReady = false;
    //   console.log('WhatsApp bot disconnected');
    // });
  }

  private async handleMessage(message: any) {
    try {
      const messageBody = message.body.toLowerCase().trim();
      const contact = await message.getContact();
      const chat = await message.getChat();

      console.log(`Received message from ${contact.name || contact.number}: ${message.body}`);

      // Ducorr-specific responses
      let response = '';

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
        
📞 Phone: ${CONTACT_NUMBER}
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
        console.log(`Replied to ${contact.name || contact.number}: ${response}`);
      }
    } catch (error) {
      console.error('Error handling message:', error);
    }
  }

  public async initialize() {
    // WhatsApp bot functionality commented out for production build
    // try {
    //   await this.client.initialize();
    // } catch (error) {
    //   console.error('Error initializing WhatsApp bot:', error);
    // }
    console.log('WhatsApp bot initialization disabled');
  }

  public getQRCode(): string {
    return this.qrCode;
  }

  public isBotReady(): boolean {
    return this.isReady;
  }

  public async sendMessage(to: string, message: string) {
    // WhatsApp bot functionality commented out for production build
    // try {
    //   if (!this.isReady) {
    //     throw new Error('Bot is not ready');
    //   }
    //   await this.client.sendMessage(to, message);
    // } catch (error) {
    //   console.error('Error sending message:', error);
    //   throw error;
    // }
    throw new Error('WhatsApp bot is disabled');
  }

  public async destroy() {
    // WhatsApp bot functionality commented out for production build
    // try {
    //   await this.client.destroy();
    // } catch (error) {
    //   console.error('Error destroying WhatsApp bot:', error);
    // }
    console.log('WhatsApp bot destroy disabled');
  }
}

// Singleton instance
let botInstance: WhatsAppBot | null = null;

export function getWhatsAppBot(): WhatsAppBot {
  if (!botInstance) {
    botInstance = new WhatsAppBot();
  }
  return botInstance;
}

export default WhatsAppBot;
