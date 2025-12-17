import { NextRequest, NextResponse } from 'next/server';
// WhatsApp bot functionality commented out for production build
// import { getWhatsAppBot } from '@/lib/whatsapp-bot';

export async function POST(request: NextRequest) {
  // WhatsApp bot functionality commented out for production build
  return NextResponse.json(
    { success: false, error: 'WhatsApp bot disabled' },
    { status: 503 }
  );
  
  // try {
  //   if (process.env.ENABLE_WHATSAPP_BOT !== 'true') {
  //     return NextResponse.json(
  //       { success: false, error: 'WhatsApp bot disabled' },
  //       { status: 503 }
  //     );
  //   }

  //   const { to, message } = await request.json();

  //   if (!to || !message) {
  //     return NextResponse.json(
  //       { success: false, error: 'Missing required fields: to, message' },
  //       { status: 400 }
  //     );
  //   }

  //   const bot = getWhatsAppBot();
    
  //   if (!bot.isBotReady()) {
  //     return NextResponse.json(
  //       { success: false, error: 'Bot is not ready' },
  //       { status: 503 }
  //     );
  //   }

  //   await bot.sendMessage(to, message);
    
  //   return NextResponse.json({
  //     success: true,
  //     message: 'Message sent successfully'
  //   });
  // } catch (error) {
  //   console.error('Error sending message:', error);
  //   return NextResponse.json(
  //     { success: false, error: 'Failed to send message' },
  //     { status: 500 }
  //   );
  // }
}

