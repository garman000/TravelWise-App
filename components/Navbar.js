import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import AuthGoogle from "./AuthGoogle";

import { useAuthContext } from "../context/AuthContext";
import logoWhite from "../public/images/travelWiseWhite.png";

import styles from "../styles/Navbar.module.css";

const Navbar = ({ children, welcome }) => {
  const [navbar, setNavbar] = useState(false);
  const { data: session } = useSession();
  const [currentUser, setCurrentUser] = useAuthContext();
  const [scrollY, setScrollY] = useState();

  useEffect(() => {
    console.log({session})
    console.log({currentUser})
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 110) {
        setScrollY(window.scrollY);
      } else {
        setScrollY();
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {welcome && session ? (
        <div className={scrollY ? styles.navActive : styles.navbar}>
          <div className={styles.logo}>
            <a href="/">
              <Image src={logoWhite} width={350} height={100} />
            </a>
          </div>
          <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/articles/sample">Articles</Link>
            {session && currentUser && (<Link href="/trips">Plan A Trip</Link>)}
            {session && currentUser && (
              <Link href={`/trips/${currentUser.user._id}/mytrip`}>
                My Trips
              </Link>
            )}
          </div>
          <AuthGoogle />
        </div>
      ) : (
        <div className={scrollY ? styles.navActive : styles.navbar}>
          <div className={styles.logo}>
            <a href="/">
              <Image src={logoWhite} width={350} height={100} />
            </a>
          </div>
          <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/articles/sample">Articles</Link>
          </div>
          <AuthGoogle />
        </div>
      )}
    </>
  );
};

export default Navbar;
