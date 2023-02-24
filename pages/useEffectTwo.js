import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '@/styles/UseEffectTwo.module.css'



export default function UseEffectTwo() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50);

    }, [])

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" ></link>

            <div className={styles.body}>
                <div className={styles.main}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <div className={styles.number}>
                        {number}
                    </div>
                    <div className={styles.pageName}>
                        useEffectTwo
                    </div>
                </div>
            </div>
        </>
    )
}