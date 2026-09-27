import { PUBLIC_DATA_VERSION } from '../../../data/generatedResearchVersion';
import { runtimeVersion } from '../../../../scripts/research-version.mjs';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function GET() {
  return Response.json(runtimeVersion(process.cwd(), PUBLIC_DATA_VERSION), { headers: { 'Cache-Control': 'no-store, max-age=0' } });
}
