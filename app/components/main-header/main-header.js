import Link from 'next/link'
import css from './main-header.module.css'

export default function MainHeader() {
    return (
        <header className={css.header}>
            <div className={css.logo}>
                <div>
                    <Link href="/">
                        <img id={css['logo-image']} alt="POLYWOOD Scheduler" />
                    </Link>
                </div>
            </div>
            <div id={css['header-right-container']}>{/*  nav and other items will here */}</div>
        </header>
    )
}