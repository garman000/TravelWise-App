import Layout from "../../components/layout";
import Head from "next/head";
import Image from "next/image";
import { getAllPackagesIds, getPackagesData } from "../../lib/packages";
import travelWise from "@garman000/travelbuddy";

import utilStyles from "../../styles/utils.module.css";


export async function getStaticProps({ params }) {
  const packageData = await getPackagesData(params.id);

  let functionData;
  if (params.id === "package1") {
    functionData = Object.values(travelWise).map((func) => {
      return {
        body: func.toString(),
        name: func.name,
        length: func.length,
      };
    });
  } else if (params.id === "package2") {
    functionData = Object.values(travelWise).map((func) => {
      return {
        body: func.toString(),
        name: func.name,
        length: func.length,
      };
    });
  }

  return {
    props: {
      packageData,
      functionData,
    },
  };
}
export async function getStaticPaths() {
  const paths = getAllPackagesIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Package({ packageData, functionData }) {
  return (
    <Layout returnHome>
      <Head>
        <title>{packageData.title}</title>
      </Head>
      <div className={utilStyles.bodyContainer}>
          <article className={utilStyles.articleCtl}>
          <div className={utilStyles.headingXl}>{packageData.title}</div>
          {functionData.map((item) => {
            return (
              <div className={utilStyles.card}>
                <div>
                  <strong>Function Name:</strong> {item.name}
                </div>
                <div>
                  <strong>Arguments:</strong> {item.length}
                </div>
                <textarea readOnly>{item.body}</textarea>
              </div>
            );
          })}
          <div dangerouslySetInnerHTML={{ __html: packageData.contentHtml }} />
        </article>
      </div>
    </Layout>
  );
}
