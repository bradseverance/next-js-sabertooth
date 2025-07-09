'use client'

import css from './not-found.module.css'

export default function Page() {
    return (
        <>
        <header className={css.header}>
            <img src="/sabertooth-logo-error.png" />
            <h1>Grr! 404 - Not Found</h1>
        </header>
        <main className={css.main}>
            <p>We're very sorry, but we could not find the requested page or resource.</p>
        </main>
        </>
    )
}