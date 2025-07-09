import { Suspense } from 'react'
import PalletList from '@/app/settings/pallet/PalletList'
import Fallback from '@/app/components/suspense-fallback/suspense-fallback'
import css from './page.module.css'

export default function Page() {
  return (
    <>
      <h1>Pallets</h1>
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
