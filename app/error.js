'use client'

import css from './error.module.css'

export default function Error({ error, reset }) {
    console.log(error);
    return (
        <>
        <header className={css.header}>
            <img src="/sabertooth-logo-error.png" />
            <h1>Grr! Something went wrong</h1>
        </header>
        <main className={css.main}>
            <p>We're very sorry, but there was an unexpected was an error.</p>
            <p className={css['main-header']}>Message:</p>
            <p className={css['message']}>{error.message}</p>
            <p className={css['main-header']}>Stack Trace:</p>
            <p className={css['stack-trace']}>{error.stack}</p>
        </main>
        </>
    )
}