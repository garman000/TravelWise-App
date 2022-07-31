import Head from "next/head";
import Link from "next/link";

import Date from "../../components/date";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";
import { getSortedPackagesData } from "../../lib/packages";

import utilStyles from "../../styles/utils.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allPackagesData = getSortedPackagesData();

  return {
    props: {
      allPostsData,
      allPackagesData,
    },
  };
}

export default function Home({ allPostsData, allPackagesData }) {
  return (
    <Layout returnHome>
      <Head>
        <title>About Travel-Wise</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.container}>
          <p>
            TravelWise was created with the traveler at the heart. After many years of travelling and globetrotting, I understood the need to make travel simple. The more the world is connected, travel to further regions becomes easy. 

            And at travel wise we created a place where some of the best knkown events in the world are but only a simple click of a button away from the user. No research required, we have done all the hard work for you!
          </p>
       
        </div>
      </section>

      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.packageCtl}`}
      >
        <div>
          <div className={utilStyles.headingLg}>Functions</div>
          <section
            className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
          >
            <ul className={utilStyles.list}>
              {allPackagesData.map(({ id, date, title, name }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/packages/${id}`}>{name}</Link>
                  <br />

                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div>
          <div className={utilStyles.headingLg}>Blog</div>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
