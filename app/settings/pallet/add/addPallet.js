'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default async function addPallet(formData) {

    console.log(formData.get('active'))
    const pallet = {
        palletName: formData.get('palletName'),
        palletLength: formData.get('palletLength'),
        palletWidth: formData.get('palletWidth'),
        palletWeight: formData.get('palletWeight'), 
        active: 0
    }

    if (formData.get('active') == 'on') {
        pallet.active = 1
    }

    // Call the API to insert into the DB
    const res = await fetch(`${process.env.API}pallet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pallet)
    })

    if (!res.ok) {
        await cookies().set(
            'flash',
            JSON.stringify({ type: 'error', message: 'Failed to add pallet.' }),
            { path: '/settings/pallet', maxAge: 10 }
        )
        redirect('/settings/pallet')
    }

    await cookies().set(
        'flash',
        JSON.stringify({ type: 'success', message: 'Pallet added successfully.' }),
        { path: '/settings/pallet', maxAge: 10 }
    )

    redirect('/settings/pallet')
}