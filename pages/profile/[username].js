import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

import Layout from "../../components/layout";

import styles from "../../styles/WelcomePage.module.css";
import utilStyles from "../../styles/utils.module.css";
import { useEffect } from "react";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { username } = router.query;
  
  function signOutHandler() {
    signOut({ callbackUrl: `${window.location.origin}` });
  }
  if (session) {
    return (
      <Layout>
        <div>
          <div className={utilStyles.headingMd}>
            <h4>You are logged in as: {username}</h4>
            <div className={styles.boxCenter}>
              <h4>Email: {session.user.email}</h4>
              <br />
              {session.user.image && (
                <span>
                  <img src={session.user.image} alt={session.user.name} />
                </span>
              )}
            </div>
            <br />
            <br />
            <button className={styles.primaryButton} onClick={signOutHandler}>
              Sign Out
            </button>
          </div>
        </div>
      </Layout>
    );
  }
  return (
    <div className={styles.pic}>
      <br />
      <button className={styles.signOut} onClick={() => signIn()}>
        Sign in
      </button>
    </div>
  );
};
export default Profile;
