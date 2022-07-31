import style from "../../styles/TableOfContents.module.css"

const TableOfContent = (props) => {
  const { tableOfContent } = props;
  return (
    <div className={style.contentContainer}>
      <h3>Table of Contents</h3>
      {tableOfContent &&
        tableOfContent.map((item) => {
          return (
            <a href={"#" + item.replace(/ /g, "").replace(".", "")} key={item}>
              {item}
            </a>
          );
        })}
    </div>
  );
};

export default TableOfContent;
