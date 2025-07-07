'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function DynamicTitle() {
    const pathname = usePathname()
    const [title, setTitle] = useState('')

    useEffect(() => {
        let formattedTitle = 'POLYWOOD®';

        if (!pathname) return

        const parts = pathname
            .split('/')
            .filter(Boolean) // remove empty segments
            .map(segment =>
            segment
                .replace(/-/g, ' ') // convert dashes to spaces
                .replace(/\b\w/g, c => c.toUpperCase()) // capitalize first letter of each word
            )

        if (parts.length > 0) {
            formattedTitle += ' | '
            formattedTitle += parts.join(' | ')
        }

        setTitle(formattedTitle)
    }, [pathname])

    return (
        <title>{title}</title>
    )
}
