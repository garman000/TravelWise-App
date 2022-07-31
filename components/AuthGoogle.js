import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";
import { useAuthContext } from "../context/AuthContext";
import { getUserByEmail } from "../lib/users";

import styles from "../styles/LoginBtn.module.css";

export default function AuthGoogle({ children, ticketCard }) {
  const { data: session } = useSession();
  const [currentUser, setCurrentUser] = useAuthContext();

  useEffect(() => {
    if (session) {
      const dbUser = getUserByEmail(session.user.email);
      dbUser.then((data) => {
        setCurrentUser(data);
      });
    } else {
      setCurrentUser();
    }
  }, [session]);

  return (
    <>
    
      {session && session.user.image ? (
        <div className={styles.container}>
          <div className={styles.pic}>
            <Link href={`/profile/${session.user.name}`}>
              <Image
                className={styles.picture}
                src={session.user.image}
                alt={session.user.name}
                width={70}
                height={70}
              />
            </Link>
            <main>{children}</main>
            <br />

            {!ticketCard && (
              <button className={styles.signOut} onClick={() => signOut()}>
                Sign out
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.pic}>
          <br />
          <button className={styles.signOut} onClick={() => signIn()}>
            Sign in
          </button>
        </div>
      )}
    </>
  );
}
