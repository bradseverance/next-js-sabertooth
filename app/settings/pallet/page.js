import { Suspense } from 'react'
import PalletList from '@/app/settings/pallet/PalletList'
import Fallback from '@/app/components/suspense-fallback/suspense-fallback'
import css from './page.module.css'
import Link from 'next/link'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const flashCookie = cookieStore.get('flash')
  let flash = null

  if (flashCookie) {
    try {
      flash = JSON.parse(flashCookie.value)
      cookieStore.delete('flash')
    } catch {
      // If it fails, ignore it
    }
  }

  return (
    <>
      {flash && (
        <div className={`flash-message ${flash.type}`}>
          {flash.message}
        </div>
      )}
      <div className="flex-container">
          <div>
            <h1>Pallets</h1>
          </div>
          <div className="flex-right">
            <Link href="/settings/pallet/add"><span className="material-icons md-18 green icon-link">add_circle</span>Add a Pallet</Link>
          </div>
      </div>
      <div className="grid-table">
        <div className={`header ${css.header}`}>
          <div className="cell">ID</div>
          <div className="cell">Length</div>
          <div className="cell">Width</div>
          <div className="cell">Height</div>
          <div className="cell">Weight</div>
          <div className="cell">Actions</div>
        </div>
        <Suspense fallback={<Fallback />}>
          <PalletList />
        </Suspense>
      </div>
    </>
  )
}
