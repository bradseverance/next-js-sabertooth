import { getConnection } from '@/utilities/db';

export async function GET(request) {
    try {
        const conn = await getConnection();
        const { searchParams } = new URL(request.url)
        const idx = searchParams.get('idx')

        let rows

        if (idx) {
            [rows] = await conn.query('SELECT * FROM pallet_type WHERE idx = ?', [idx])
        } else {
            [rows] = await conn.query('SELECT * FROM pallet_type')
        }

        await conn.end();

        return Response.json(rows);
    } catch (error) {
        throw new Error(error)
    }
    
}