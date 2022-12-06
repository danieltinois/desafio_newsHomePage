import React from "react";
import styles from "./nav.module.scss";
import logo from "../../assets/images/logo.svg";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo-W" />
      </div>
      <div className={styles.nav_main}>
        <nav className={styles.nav_topicos}>
          <ul className={styles.lista}>
            <li className={styles.li_content}>
              <p>Home</p>
            </li>
            <li className={styles.li_content}>
              <p>New</p>
            </li>
            <li className={styles.li_content}>
              <p>Popular</p>
            </li>
            <li className={styles.li_content}>
              <p>Trending</p>
            </li>
            <li className={styles.li_content}>
              <p>Categories</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
