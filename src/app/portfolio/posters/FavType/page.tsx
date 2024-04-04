import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import HaileysDesign from "@/assets/MyBranding/HaileysDesign.png";
import FavType from "@/assets/Favoritetype.png"
const Portfolio = () => {
  return (
    <><div className={styles.header}>
          <nav className={styles.nav}>
              <ul className={styles.navUl}>
                  <a className={styles.logo} href="/"><Image src={HaileysDesign} width={250} height={90} alt={'Hailey'} /></a>
                  <li className={styles.navLi}><a href="/">About Me</a></li>
                  <li className={styles.navLi}><a href="/portfolio">Portfolio</a></li>
                  <li className={styles.navLismall}><a href="/portfolio/logos">Logos</a></li>
                  <li className={styles.navLismall}><a href="/portfolio/posters">Posters</a></li>
                  <li className={styles.navLismall}><a href="/portfolio/OtherProjects">Other Projetcs</a></li>
                  <li className={styles.navLi}><a href="/Contact">Contact</a></li>
              </ul>
          </nav>
      </div>
      <h1 className={styles.h1}>Favorite Type Poster</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={FavType}
        width={280}
        height={400} 
        alt={'POL'}    /></div>
    <p className={styles.p}>In my typography class we were assigned a project where we had to make an entire poster only using type. On top of this, it had to be our "favorite typeface" and we could only use that singular typeface. I chose to do Clarendon after some research because I thought it would be fun to create a wanted poster, which Clarendon was commonly used for when it was first created by Robert Besley in 1845.</p>
  
        </>
    );
};
export default Portfolio;