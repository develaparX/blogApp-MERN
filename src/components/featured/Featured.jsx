import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b >Hey, develapar here!</b> Let me tell you something about my journey.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quo repellat itaque rerum laborum, placeat corrupti tenetur repellendus maiores accusamus velit fuga ipsa! Excepturi fuga ut consequuntur quos aspernatur quo!</h1>
                    <p className={styles.postDesc}>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam praesentium architecto perspiciatis impedit. Quisquam maxime adipisci quae temporibus, itaque, consequatur minus nobis quas beatae ipsa fugiat iusto eaque, alias eius.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured
