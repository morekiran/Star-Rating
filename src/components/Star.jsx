import React from "react";
import styles from "./Star.module.css";

const Star = ({starNo,activeStar,setActiveStar}) => {

    return starNo <= activeStar?(
        <div className={styles.Star} onClick={()=> setActiveStar(starNo)}>
        </div>
        ) : (       
         <div className={styles.Star+" "+ styles.inactiveStar}
         onClick={()=> setActiveStar(starNo)}
         ></div>
        );
    };

export default Star;