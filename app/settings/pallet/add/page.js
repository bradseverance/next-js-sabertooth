import Link from "next/link";
import addPallet from './addPallet'

export default function Page() {
    return (
        <>
            <h1>Add a New Pallet</h1>
            <form className="saber-form" action={addPallet}>
                <div className="save-form-bar">
                    <Link href="/settings/pallet">Cancel</Link>
                    <input type="submit" value="Save" />
                </div>
                <div className="form-container">
                    <div className="quarter-width">
                        <label htmlFor="palletName">Pallet Name</label>
                        <input type="text" name="palletName" id="palletName" />
                    </div>
                    <div className="quarter-width">
                        <label htmlFor="palletLength">Pallet Length</label>
                        <input type="text" name="palletLength" id="palletLength" />
                    </div>
                    <div className="quarter-width">
                        <label htmlFor="palletWidth">Pallet Width</label>
                        <input type="text" name="palletWidth" id="palletWidth" />
                    </div>
                    <div className="quarter-width">
                        <label htmlFor="palletWeight">Pallet Weight</label>
                        <input type="text" name="palletWeight" id="palletWeight" />
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" name="active" id="active" />
                        <label htmlFor="active">Active</label>
                    </div>
                </div>
            </form>           
        </>
    )
}