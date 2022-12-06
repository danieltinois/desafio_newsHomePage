import React from "react";
import Nav from "./components/nav/nav";
import styles from "./app.module.scss";
import News from "./components/news/news";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <Nav></Nav>
        <News></News>
      </div>
    </div>
  );
}

export default App;
