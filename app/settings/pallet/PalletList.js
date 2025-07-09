import css from './page.module.css'

export default async function PalletList() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await fetch(`${process.env.API}pallet`, {
    cache: 'no-store'
  })

  if (!response.ok) {
    throw new Error('Failed to fetch pallets')
  }

  const palletList = await response.json()

  return (
    <>
      {palletList.map(pallet => (
        <div key={pallet.idx} className={`row ${css.row}`}>
          <div className="cell">{pallet.idx}</div>
          <div className="cell">{pallet.length}</div>
          <div className="cell">{pallet.width}</div>
          <div className="cell">{pallet.height}</div>
          <div className="cell">{pallet.weight}</div>
          <div className="cell"></div>
        </div>
      ))}
    </>
  )
}