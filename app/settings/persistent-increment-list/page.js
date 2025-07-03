'use client'

import { useEffect, useState } from 'react'

export default function PersistentIncrementList() {

    const [persistentIncrements, setPersistentIncrements] = useState([]);

    useEffect(() => {
        fetch('/api/persistent_increment')
        .then(res => res.json())
        .then(data => setPersistentIncrements(data));
    }, []);

    return (
        <>
            <h1>List of Persistent Increments</h1>
            <div className="grid-table">
                <div className="header">
                    <div className="cell">Persistent Increment Name</div>
                    <div className="cell">Increment</div>
                </div>
                {persistentIncrements.map(persistentIncrement => (
                    <div key={persistentIncrement.increment_name} className="row">
                        <div className="cell">{persistentIncrement.increment_name}</div>
                        <div className="cell">{persistentIncrement.increment}</div>
                    </div>
                ))}
            </div>  
        </>
    )
}