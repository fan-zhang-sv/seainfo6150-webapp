import React, {useState} from "react";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = (props) => {
  const [buttonExpanded, setButtonExpanded] = useState(false)


  const toggle = () => {
    // console.log("!!!!")
    setButtonExpanded(!buttonExpanded)
  }

  return (
    <li className={styles.listItem}>
      <article className={styles.uglyItem}>
        <h2>{props.article.title}</h2>
        <p style={{display: buttonExpanded?"block":"none"}} className={styles.shortLine}>{props.article.shortText}</p>
        <time style={{display: buttonExpanded?"block":"none"}} className={styles.time} dateTime={props.article.timeStamp}>
          {props.article.displayDate}
        </time>
        <ArticleTextToggleButton buttonText={buttonExpanded? "Show less" : "Show more"} onClick={toggle}/>
      </article>
    </li>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticleListItem;
