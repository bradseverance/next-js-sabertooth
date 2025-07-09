// app/api/persistent-increment/route.js
import { getConnection } from '@/utilities/db';

export async function GET() {
  const conn = await getConnection();
  const [persistentIncrements] = await conn.query('SELECT increment_name, increment FROM persistent_increment');
  await conn.end();

  return Response.json(persistentIncrements); 
}