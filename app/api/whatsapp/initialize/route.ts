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

  //   const bot = getWhatsAppBot();
    
  //   if (bot.isBotReady()) {
  //     return NextResponse.json({
  //       success: true,
  //       message: 'Bot is already initialized and ready'
  //     });
  //   }

  //   await bot.initialize();
    
  //   return NextResponse.json({
  //     success: true,
  //     message: 'Bot initialization started'
  //   });
  // } catch (error) {
  //   console.error('Error initializing bot:', error);
  //   return NextResponse.json(
  //     { success: false, error: 'Failed to initialize bot' },
  //     { status: 500 }
  //   );
  // }
}

