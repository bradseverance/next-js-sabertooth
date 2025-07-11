import css from './page.module.css'

export default async function PersistentIncrementList() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await fetch(`${process.env.API}persistent_increment`, {
    cache: 'no-store'
  })

  if (!response.ok) {
    throw new Error('Failed to fetch persistent increments')
  }

  const persistentIncrements = await response.json()

  return (
    <>
      {persistentIncrements.map(persistentIncrement => (
        <div key={persistentIncrement.increment_name} className={`row ${css.row}`}>
          <div className="cell">{persistentIncrement.increment_name}</div>
          <div className="cell">{persistentIncrement.increment}</div>
        </div>
      ))}
    </>
  )
}