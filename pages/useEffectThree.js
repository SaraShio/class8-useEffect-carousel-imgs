import Link from 'next/link'
import { useEffect, useState } from 'react';
import styles from '@/styles/UseEffectThree.module.css'

export default function UseEffectThree() {

    const [number, setNumber] = useState(1);
    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(number * 10 - 10);
    }, [number]);

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" ></link>

            <div className={styles.body}>
                <div className={styles.main}>
                    <Link href='/' className={styles.link}>Home</Link>
                    <div className={styles.number}>
                        {value}
                    </div>
                    <div className={styles.buttons}>
                        <div>
                            <button className={styles.button} onClick={() => setNumber(number + 1)}>Click Me +10</button>
                        </div>
                        <div>
                            <button className={styles.button} onClick={() => setNumber(number - 1)}>Click Me -10</button>
                        </div>
                    </div>
                    <div className={styles.pageName}>
                        useEffectThree
                    </div>

                </div>
            </div>
        </>
    )
}