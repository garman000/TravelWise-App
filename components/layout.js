import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import MobileNav from './Navigation/MobileNav';

const name = 'Steven Garman';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home, returnHome, welcome }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
        <Navbar welcome returnHome />     
        <MobileNav />  
      {!welcome && (<header className={styles.header}>
        {home && (
          <>
          <div className={utilStyles.photoCtl}>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            </div>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>)}
      <main>{children}</main>
      {returnHome && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
   
      <Footer />

    </div>
  );
}