'use client'

import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/glass-banner'), {
    ssr: false,
})

export default function ClientScene() {
    return <Scene />
}