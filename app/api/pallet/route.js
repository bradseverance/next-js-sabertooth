import { getConnection } from '@/utilities/db';

export async function GET(request) {
    try {
        const conn = await getConnection();
        const { searchParams } = new URL(request.url)
        const idx = searchParams.get('idx')

        let rows, result

        if (idx) {
            [rows] = await conn.query('SELECT * FROM pallet_type WHERE idx = ?', [idx])
            if (rows.length) {
                result = rows[0]
            } else {
                result = [];
            }

        } else {
            [result] = await conn.query('SELECT * FROM pallet_type')
        }

        await conn.end();

        return Response.json(result);
    } catch (error) {
        throw new Error(error)
    }  
}

export async function POST(request) {
  try {
    const data = await request.json();
    const { palletName, palletLength, palletWidth, palletWeight, active } = data;

    const conn = await getConnection();
    const [result] = await conn.query(
      'INSERT INTO pallet_type (pallet_name, length, width, weight, active) VALUES (?, ?, ?, ?, ?)',
      [palletName, palletLength, palletWidth, palletWeight, active]
    );

    await conn.end();

    return Response.json({ success: true, insertedId: result.insertId });
  } catch (error) {
    console.error('Insert error:', error);
    return new Response('Error inserting data', { status: 500 });
  }
}