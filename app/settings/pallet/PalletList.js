import css from './page.module.css'

export default async function PalletList() {
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
                <div className="cell"><a href={`/settings/pallet/${pallet.idx}`}>{pallet.idx}</a></div>
                <div className="cell">{pallet.length}</div>
                <div className="cell">{pallet.width}</div>
                <div className="cell">{pallet.height}</div>
                <div className="cell">{pallet.weight}</div>
                <div className="cell">
                    <span className={`material-icons md-24 add-10-right ${pallet.active ? 'yellow' : 'gray'}`}>lightbulb</span>
                    <span className="material-icons md-24 red">cancel</span>               
                </div>
                </div>
            ))}
        </>
    )
}