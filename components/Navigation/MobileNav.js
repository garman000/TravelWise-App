import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Navbar.module.css";
import logoWhite from "../../public/images/travelWiseWhite.png";
import { RiMenu5Fill } from "react-icons/ri";
import { CgCloseO } from "react-icons/cg";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useAuthContext } from "../../context/AuthContext";

const MobileNav = () => {
  const { data: session } = useSession();
  const [currentUser, setCurrentUser] = useAuthContext();
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <RiMenu5Fill
      className={styles.hamburger}
      size={40}
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closedIcon = (
    <CgCloseO
      className={styles.hamburger}
      size={40}
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const handleOpenMobile = () => {
    setOpen(!open);
}
  return (
    <div className={styles.mobileContainer}>
      <div className={styles.logo}>
        <a href="/">
          <Image src={logoWhite} width={350} height={100} />
        </a>
      </div>
      {open ? closedIcon : hamburgerIcon}
      {open && (
        <div className={styles.MobileNav}>
          <div className={styles.test} onClick={handleOpenMobile}>
            <Link  href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/articles/sample">Articles</Link>
            {session && currentUser && <Link href="/trips">Plan A Trip</Link>}

            {session && currentUser && (
              <Link href={`/trips/${currentUser.user._id}/mytrip`}>
                My Trips
              </Link>
            )}
          </div>
          {/* <Link>My Trips</Link> */}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
