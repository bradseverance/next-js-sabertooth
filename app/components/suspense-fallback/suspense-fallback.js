import css from './suspense-fallback.module.css'

export default function SuspenseFallback() {
    return (
        <div className={`${css.spinner} ${css.medium} ${css.centered}`}></div>
    )
}