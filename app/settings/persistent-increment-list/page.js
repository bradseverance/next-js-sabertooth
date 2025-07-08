import { Suspense } from 'react'
import PersistentIncrementList from '@/app/components/PersistentIncrementList'
import Fallback from '@/app/components/suspense-fallback/suspense-fallback'

export default function Page() {
  return (
    <>
      <h1>List of Persistent Increments</h1>
      <div className="grid-table">
        <div className="header">
          <div className="cell">Persistent Increment Name</div>
          <div className="cell">Increment</div>
        </div>

        <Suspense fallback={<Fallback />}>
          <PersistentIncrementList />
        </Suspense>
      </div>
    </>
  )
}
