import styles from './singlePage.module.css'
import Image from 'next/image'
import Menu from'@/components/menu/Menu'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <div className={styles.user}>
                <div className={styles.userImageContainer}>
                     <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                </div>
                <div className={styles.userTextContainer}>
                    <span className={styles.username}>John Doe</span>
                    <span className={styles.date}>01.01.2024</span>
                </div>
            </div>
        </div>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
    <div className={styles.content}>
        <div className={styles.post}>
            <div className={styles.postDesc}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima molestiae cumque culpa dolore optio repellat eos rerum nobis nostrum similique quaerat repudiandae, nemo ad voluptas vitae, placeat pariatur. Amet.</p>
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aspernatur modi sed tempore, perspiciatis sint quia maxime? Veritatis magnam mollitia quam, cum natus facere odit quo commodi neque tenetur! Iure.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in natus nobis repellendus maxime, commodi ratione ipsa non molestiae laudantium beatae earum fuga nihil ipsum at impedit explicabo et reiciendis.</p>
            </div>
            <div className={styles.coment}>
              <Comments/>
            </div>
        </div>
        <Menu />
    </div>
    </div>
  )
}

export default SinglePage
