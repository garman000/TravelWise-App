import React from "react";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Layout from "../components/layout";

import styles from "../styles/WelcomePage.module.css";

function Welcome() {
  const { data: session } = useSession();

  return (
    <div className={styles.backgroundImg}>
      <Layout welcome>
        <Head>
          <title>Welcome</title>
        </Head>

        {/* <map name="image-map">
          <area
            target=""
            alt="balloon"
            title="balloon"
            href="/trips"
            coords="1249,626,105"
            shape="circle"
          />
          <area
            target=""
            alt="full ballon"
            title="full ballon"
            href=""
            coords="1254,785,1303,701,1197,706,1237,748"
            shape="poly"
          />
        </map> */}

        <div className={styles.container}>
          <div className={styles.welcometext}>
            <div>Travel Wise, its a mindset</div>
            <div>Making travel easy</div>
            {!session && (
              <button className={styles.primaryButton} onClick={() => signIn()}>
                Sign In with Google
              </button>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Welcome;
