import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from "./styles.module.css";
import { Layout } from '@/layout';

function saveTopic(topic: string, callback: Function) {
    localStorage.setItem('topic', topic);

    callback()
}

const topics = ['Téma A', 'Téma B', 'Téma C', 'Téma D']

export default function RekniNamCoJeProTebeDulezite() {
    const router = useRouter()

    return (
        <Layout leftBackgroundColor='greenyellow'>
            <>
                <h1>Řekni nám co je pro tebe důležité</h1>
                <ul>
                    {topics.map((topic, i) => <li
                        key={i}
                        onClick={() => saveTopic(topic, () => router.push('/potvrzeni-volby'))}
                    ><button>{topic}</button></li>)}
                </ul>
            </>
        </Layout>
    )
}