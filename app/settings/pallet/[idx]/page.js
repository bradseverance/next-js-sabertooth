import { notFound } from 'next/navigation'
import css from './page.module.css'

export default async function Page({ params }) {
    const response = await fetch(`${process.env.API}pallet?idx=${params.idx}`, {
        cache: 'no-store'
    })

    if (!response.ok) {
        throw new Error('Failed to get pallet')
    }

    const palletDetails = await response.json()

    if (!palletDetails.length) {
        notFound()
    }

    return (
        <>
            <h1>I'm a pallet ID: {palletDetails.idx}</h1>
        </>
    )
}