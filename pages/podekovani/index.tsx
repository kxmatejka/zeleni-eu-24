import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Layout } from '@/layout'

export default function Podekovani() {
    const [topic, setTopic] = useState('')

    useEffect(() => {
        const topic = localStorage.getItem('topic');
        setTopic(topic ?? '')
    }, [])

    if (topic === '') {
        return null
    }

    return (
        <Layout>
            <h1>Děkujeme za sdílení</h1>
            {topic && <p>Vaše téma je {topic}</p>}
            <p>
                <Link href='/zustanme-v-kontaktu'><button>Další krok</button></Link>
            </p>
        </Layout>
    )
}