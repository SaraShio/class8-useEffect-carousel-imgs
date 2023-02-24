import Link from 'next/link'
import Carousel from '@/components/carousel'
import styles from '@/styles/CarouselPage.module.css'


export default function CarouselPage() {


    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" ></link>

            <div className={styles.body}>
                <div className={styles.main}>
                    <Link href='/' className={styles.link}>Home</Link>
                        <Carousel />                    
                </div>
            </div>
        </>
    )
}