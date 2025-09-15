import { NextRequest, NextResponse } from 'next/server';
import { getWhatsAppBot } from '@/lib/whatsapp-bot';

export async function GET(request: NextRequest) {
  try {
    const bot = getWhatsAppBot();
    
    return NextResponse.json({
      success: true,
      isReady: bot.isBotReady(),
      qrCode: bot.getQRCode(),
      message: bot.isBotReady() ? 'Bot is ready' : 'Bot is initializing'
    });
  } catch (error) {
    console.error('Error getting bot status:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to get bot status' },
      { status: 500 }
    );
  }
}

