import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const configPath = join(process.cwd(), 'public/admin/config.yml');
    const configContent = readFileSync(configPath, 'utf-8');
    
    return new Response(configContent, {
      headers: {
        'Content-Type': 'application/x-yaml',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to load config' }),
      { 
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
