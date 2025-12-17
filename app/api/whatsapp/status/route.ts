import { NextRequest, NextResponse } from 'next/server';
// WhatsApp bot functionality commented out for production build
// import { getWhatsAppBot } from '@/lib/whatsapp-bot';

export async function GET(request: NextRequest) {
  // WhatsApp bot functionality commented out for production build
  return NextResponse.json({
    success: true,
    isReady: false,
    qrCode: '',
    message: 'WhatsApp bot disabled'
  });
  
  // try {
  //   if (process.env.ENABLE_WHATSAPP_BOT !== 'true') {
  //     return NextResponse.json({
  //       success: true,
  //       isReady: false,
  //       qrCode: '',
  //       message: 'WhatsApp bot disabled'
  //     });
  //   }

  //   const bot = getWhatsAppBot();
    
  //   return NextResponse.json({
  //     success: true,
  //     isReady: bot.isBotReady(),
  //     qrCode: bot.getQRCode(),
  //     message: bot.isBotReady() ? 'Bot is ready' : 'Bot is initializing'
  //   });
  // } catch (error) {
  //   console.error('Error getting bot status:', error);
  //   return NextResponse.json(
  //     { success: false, error: 'Failed to get bot status' },
  //     { status: 500 }
  //   );
  // }
}

