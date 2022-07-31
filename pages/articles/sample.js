import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import TableOfContent from "../../components/Table of Contents/TableOContent";

import styles from "../../styles/TableOfContents.module.css";

export default function Home() {

  const [tableOfContent, setTableOfContents] = useState("");

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2"));
    const headingElementsText = [];
    console.log({ headingElements });
    console.log({ headingElementsText });
    headingElements.forEach((item) => {
      item.id = item.innerText.replace(/ /g, "").replace(".", "");
      headingElementsText.push(item.innerText);
    });

    setTableOfContents(headingElementsText);
  }, []);

  return (
    <Layout>
      <Head>
        <title>TOC Starter</title>
      </Head>
      <div className={styles.pageContainer}>
        <div className={styles.containerToc}>
             <TableOfContent tableOfContent={tableOfContent} />
        </div>
        <div className={styles.textContainer}>
          <article>
            <h2 id="manchester-united">Manchester United</h2>
            <h3 id="manchester-united">The Best</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              officia deserunt doloribus, quam ex recusandae sunt ipsam adipisci
              praesentium. Nemo ex quam quasi in nisi qui fuga dolor aperiam vel
              suscipit consequuntur quisquam voluptatem similique adipisci, quos
              possimus corrupti distinctio aliquid molestiae atque asperiores
              iste dicta! Commodi hic optio aperiam iusto aut veniam quia,
              repudiandae architecto dolorem ex eligendi a labore, magnam
              aliquid tempora voluptates fugit doloribus reiciendis, placeat
              totam sint error. Dolorem ut voluptates quibusdam ea facere, alias
              sequi similique ipsam ex repudiandae distinctio sint, harum odio
              ullam dignissimos voluptate deleniti expedita tempore repellat
              minus veniam assumenda accusanum dolores minima sint animi
              consequuntur dignissimos natus veritatis nesciunt fugiat, quas
              error iure quasi explicabo optio. Rem eveniet ducimus, labore
              ratione molestias cupiditate saepe animi aliquid ab, repellat
              totam atque iure illo officiis laudantium ad vitae nisi beatae!
              Nobis sed placeat suscipit at soluta numquam quis. Pariatur
              dignissimos quasi quibusdam totam, sit cum magni reprehenderit
              incidunt, neque consectetur error placeat unde. Enim, asperiores
              corporis perferendis consectetur possimus saepe sequi eveniet quos
              eius animi atque mollitia commodi exercitationem unde eum magnam,
              quam quia. Veniam unde eaque repellat impedit sint aperiam labore
              sunt fugit, placeat aut reprehenderit dolorem, illum dolore
              facilis temporibus numquam. Autem, eaque sint?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              officia deserunt doloribus, quam ex recusandae sunt ipsam adipisci
              praesentium. Nemo ex quam quasi in nisi qui fuga dolor aperiam vel
              suscipit consequuntur quisquam voluptatem similique adipisci, quos
              possimus corrupti distinctio aliquid molestiae atque asperiores
              iste dicta! Commodi hic optio aperiam iusto aut veniam quia,
              repudiandae architecto dolorem ex eligendi a labore, magnam
              aliquid tempora voluptates fugit doloribus reiciendis, placeat
              totam sint error. Dolorem ut voluptates quibusdam ea facere, alias
              sequi similique ipsam ex repudiandae distinctio sint, harum oat
              unde. Enim, asperiores corporis perferendis consectetur possimus
              saepe sequi eveniet quos eius animi atque mollitia commodi
              exercitationem unde eum magnam, quam quia. Veniam unde eaque
              repellat impedit sint aperiam labore sunt fugit, placeat aut
              reprehenderit dolorem, illum dolore facilis temporibus numquam.
              Autem, eaque sint?
            </p>
          </article>
          <article>
            <h2 id="roger-federer">Roger Federer</h2>
            <h3 id="roger-federer">GOAT</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              officia deserunt doloribus, quam ex recusandae sunt ipsam adipisci
              praesentium. Nemo ex quam quasi in nisi qui fuga dolor aperiam vel
              suscipit consequuntur quisquam voluptatem similique adipisci, quos
              possimus corrupti distinctio aliquid molestiae atque asperiores
              iste dicta! Commodi hic optio aperiam iusto aut veniam quia,
              repudiandae architecto dolorem ex eligendi a labore, magnam
              aliquid tempora voluptates fugit doloribus reiciendis, placeat
              totam sint error. Dolorem ut voluptates quibusdam ea facere, alias
              sequi similique ipsam ex repudiandae distinctio sint, harum odio
              ullam dignissimos voluptate laceat aut reprehenderit dolorem,
              illum dolore facilis temporibus numquam. Autem, eaque sint?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              officia deserunt doloribus, quam ex recusandae sunt ipsam adipisci
              praesentium. Nemo ex quam quasi in nisi qui fuga dolor aperiam vel
              suscipit consequuntur quisquam voluptatem similique adipisci, quos
              possimus corrupti distinctio aliquid molestiae atque asperiores
              iste dicta! Commodi hic optio aperiam iusto aut veniam quia,
              repudiandae architecto dolorem ex eligendi a labore, magnam
              aliquid tempora voluptates fugit doloribus reiciendis, placeat
              totam sint error. Dolorem ut voluptates quibusdam ea facere, alias
              sequi similique ipsam ex repudiandae distinctio sint, harum odio
              ullam dignissimos voluptate deleniti expedita tempore repellat
              minus veniam assumenda accusantium labore aut? Quam, ab
              perferendis amet quod et voluptatem deserunt expedita labore
              debitis! Quisquam dolorum a natus ipsum aperiam, voluptate non
              minima quos perferendis est aliquam sapiente nostrum nam ex quas
              iusto incidunt veritatis aliquid ullam mollitia maxime?
              Perspiciatis eveniet ab id blanditiis atque repellat quis earum
              dolores minima sint animi consequuntur dignissimos natus veritatis
              nesciunt fugiat, quas error iure quasi explicab
            </p>
          </article>
          <article>
            <h2 id="rafa-nadal">Rafael Nadal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              officia deserunt doloribus, quam ex recusandae sunt ipsam adipisci
              praesentium. Nemo ex quam quasi in nisi qui fuga dolor aperiam vel
              suscipit consequuntur quisquam voluptatem similique adipisci, quos
              possimus corrupti distinctio aliquid molestiae atque asperiores
              iste dicta! Commodi hic optio aperiam iusto aut veniam quia,
              repudiandae architecto dolorem ex eligendi a labore, magnam
              aliquid tempora voluptates fugit doloribus reiciendis, placeat
              totam sint error. Dolorem ut voluptates quibusdam ea facere, alias
              sequi similique ipsam ex repudiandae distinctio sint, harum odio
              ullam dignissimos voluptate deleniti expedita tempore repellat
              minus veniam assumenda accusantium labore aut? Quam, ab
              perferendis amet quod et voluptatem deserunt expedita labore
              debitis! Quisquam dolorum a natus ipsum aperiam, voluptate non
              minima quos perferendis est aliquam sapiente nostrum nam ex quas
              iusto incidunt veritatis aliquid ullam mollitia maxime?
              Perspiciatis eveniet ab id blanditiis atque repellat quis earum
              dolores minima sint animi consequuntur dignissimos natus veritatis
              nesciunt fugiat, quas error iure quasi explicabo optio. Rem
              eveniet ducimus, labore ratione molestias cupiditate saepe animi
              aliquid ab, repellat totam atque iure illo officiis laudantium ad
              vitae nisi beatae! Nobis sed placeat suscipit at soluta numquam
              quis. Pariatur dignissimos quasi quibusdam totam, sit cum magni
              reprehenderit incidunt, neque consectetur error placeat unde.
              Enim, asperiores corporis perferendis consectetur possimus saepe
              sequi eveniet quos eius animi atque mollitia commodi
              exercitationem unde eum magnam, quam quia. Veniam unde eaque
              repellat impedit sint aperiam labore sunt fugit, placeat aut
              reprehenderit dolorem, illum dolore facilis temporibus numquam.
              Autem, eaque sint?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              officia deserunt doloribus, quam ex recusandae sunt ipsam adipisci
              praesentium. Nemo ex quam quasi in nisi qui fuga dolor aperiam vel
              suscipit consequuntur quisquam voluptatem similique adipisci, quos
              possimus corrupti distinctio aliquid molestiae atque asperiores
              iste dicta! Commodi hic optio aperiam iusto aut veniam quia,
              repudiandae architecto dolorem ex eligendi a labore, magnam
              aliquid tempora voluptates fugit doloribus reiciendis, placeat
              totam sint error. Dolorem ut voluptates quibusdam
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              officia deserunt doloribus, quam ex recusandae sunt ipsam adipisci
              praesentium. Nemo ex quam quasi in nisi qui fuga dolor aperiam vel
              suscipit consequuntur quisquam voluptatem similique adipisci, quos
              possimus corrupti distinctio aliquid molestiae atque asperiores
              iste dicta! Commodi hic optio aperiam iusto aut veniam quia,
              repudiandae architecto dolorem ex eligendi a labore, magnam
              aliquid tempora voluptates fugit doloribus reiciendis, placeat
              totam sint error. Dolorem ut voluptates quibusdam ea facere, alias
              sequi similique ipsam ex repudiandae distinctio sint, harum odio
              ullam dignissimos voluptate deleniti expedita tempore repellat
              minus veniam assumenda accusantium labore aut? Quam, ab
              perferendis amet quod et voluptatem deserunt expedita labore
              debitis! Quisquam dolorum a natus ipsum aperiam, voluptate non
              minima quos perferendis est aliquam sapiente nostrum nam ex quas
              iusto incidunt veritatis aliquid ullam mollitia maxime?
              Perspiciatis eveniet ab id blanditiis atque repell
            </p>
          </article>
          <article>
            <h2 id="manchester">Manchester</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              officia deserunt doloribus, quam ex recusandae sunt ipsam adipisci
              praesentium. Nemo ex quam quasi in nisi qui fuga dolor aperiam vel
              suscipit consequuntur quisquam voluptatem similique adipisci, quos
              possimus corrupti distinctio aliquid molestiae atque asperiores
              iste dicta! Commodi hic optio aperiam iusto aut veniam quia,
              repudiandae architecto dolorem ex eligendi a labore, magnam
              aliquid tempora voluptates fugit doloribus reiciendis, placeat
              totam sint error. Dolorem ut voluptates quibusdam ea facere, alias
              sequi similique ipsam ex repudiandae distinctio sint, harum odio
              ullam dignissimos voluptate deleniti expedita tempore repellat
              minus veniam assumenda accusantium labore aut? Quam, ab
              perferendis amet quod et voluptatem deserunt expedita labore
              debitis! Quisquam dolorum a natus ipsum aperiam, voluptate non
              minima quos perferendis est aliquam sapiente nostrum nam ex quas
              iusto incidunt veritatis aliquid ullam mollitia maxime?
              Perspiciatis eveniet ab id blanditiis atque repellat quis earum
              dolores minima sint animi consequuntur dignissimos natus veritatis
              nesciunt fugiat, quas error iure quasi explicabo optio. Rem
              eveniet ducimus, labore ratione molestias cupiditate saepe animi
              aliquid ab, repellat totam atque iure illo officiis laudantium ad
              vitae nisi beatae! Nobis sed placeat suscipit at soluta numquam
              quis. Pariatur dignissimos quasi quibusdam totam, sit cum magni
              reprehenderit incidunt, neque consectetur error placeat unde.
              Enim, asperiores corporis perferendis consectetur possimus saepe
              sequi eveniet quos eius animi atque mollitia commodi
              exercitationem unde eum magnam, quam quia. Veniam unde eaque
              repellat impedit sint aperiam labore sunt fugit, placeat aut
              reprehenderit dolorem, illum dolore facilis temporibus numquam.
              Autem, eaque sint?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              officia deserunt doloribus, quam ex recusandae sunt ipsam adipisci
              praesentium. Nemo ex quam quasi in nisi qui fuga dolor aperiam vel
              suscipit consequuntur quisquam voluptatem similique adipisci, quos
              possimus corrupti distinctio aliquid molestiae atque asperiores
              iste dicta! Commodi hic optio aperiam iusto aut veniam quia,
              repudiandae architecto dolorem ex eligendi a labore, magnam
              aliquid tempora voluptates fugit doloribus reiciendis, placeat
              totam sint error. Dolorem ut voluptates quibusdam
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              officia deserunt doloribus, quam ex recusandae sunt ipsam adipisci
              praesentium. Nemo ex quam quasi in nisi qui fuga dolor aperiam vel
              suscipit consequuntur quisquam voluptatem similique adipisci, quos
              possimus corrupti distinctio aliquid molestiae atque asperiores
              iste dicta! Commodi hic optio aperiam iusto aut veniam quia,
              repudiandae architecto dolorem ex eligendi a labore, magnam
              aliquid tempora voluptates fugit doloribus reiciendis, placeat
              totam sint error. Dolorem ut voluptates quibusdam ea facere, alias
              sequi similique ipsam ex repudiandae distinctio sint, harum odio
              ullam dignissimos voluptate deleniti expedita tempore repellat
              minus veniam assumenda accusantium labore aut? Quam, ab
              perferendis amet quod et voluptatem deserunt expedita labore
              debitis! Quisquam dolorum a natus ipsum aperiam, voluptate non
              minima quos perferendis est aliquam sapiente nostrum nam ex quas
              iusto incidunt veritatis aliquid ullam mollitia maxime?
              Perspiciatis eveniet ab id blanditiis atque repell
            </p>
          </article>
          </div>
      </div>
    </Layout>
  );
}
