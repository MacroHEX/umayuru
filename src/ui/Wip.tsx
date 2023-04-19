// ::: React
//
import React, { useEffect, useState } from "react";

// ::: Next
//
import Image from "next/image";

// ::: Utils
//
import { imagePicker } from "@/utils";

// ::: CSS
//
import styles from "../styles/wip.module.css";

// :::
//
export const Wip = () => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const newImgUrl = imagePicker(32, "um");
    setImgUrl(newImgUrl);
  }, []);

  return (
    <div>
      <div className={styles["main-container"]}>
        <div>
          <h1 className={styles["main-text"]}>Ogamikami</h1>
          <h2 className={styles["sub-text"]}>Sitio en Construcción</h2>
        </div>
        <div className={styles["img-container"]}>
          <Image alt="umamusume" src={imgUrl} width={150} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Wip;
