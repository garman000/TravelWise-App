import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import { useEffect, useState } from "react";

import TableOfContent from "../../components/Table of Contents/TableOContent";
import { server } from "../../config/index.js";

import style from "../../styles/TableOfContents.module.css";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticProps({ params }) {
  const userExperiences = await fetch(
    `${server}/api/mongo/trips/get-example-experiences`
  ).then((response) => response.json());

  // const userExperiences = await getSpecialTrips()
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
      userExperiences,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData, userExperiences }) {
  const [tableOfContent, setTableOfContents] = useState("");

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2"));
    const headingElementsText = [];
    headingElements.forEach((item) => {
      item.id = item.innerText.replace(/ /g, "").replace(".", "");
      headingElementsText.push(item.innerText);
    });

    setTableOfContents(headingElementsText);
  }, []);

  useEffect(() => {
    const iframeElement = Array.from(document.querySelectorAll("h6"));
    const parent = document.getElementById("post-data");
    const iframeElementText = [];
    const titlesArray = [];

    iframeElement.forEach((item) => {
      item.id = "iframe";

      titlesArray.push();
      const newItem = document.createElement("div");
      let newSrc = item.innerText.split(";");
      const src = newSrc[0];
      console.log("website src test? ==>", src);
      newItem.innerHTML = `<iframe
      key={index}
      width="560"
      height="315"
      src=${src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>`;
      parent.replaceChild(newItem, item);
    });
  }, []);

   useEffect(() => {
    console.log({userExperiences})
  }, [])

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className={style.pageContainer}>
        <div className={style.containerToc}>
          <TableOfContent tableOfContent={tableOfContent} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={style.textContainer}>
            {userExperiences.map(
              ({ location, city, airportCode, startDate, endDate, iframe }) => (
                <div>
                  <div>{location}</div>
                  {/* <div>{airportCode}</div>
                <div>{city}</div>
                <div>{startDate}</div>
                <div>{endDate}</div>
                <div>{iframe}</div> */}
                </div>
              )
            )}
            <article>
              <h1 className={utilStyles.headingXl}>{postData.title}</h1>
              <div
                id="post-data"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
              />
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
}
