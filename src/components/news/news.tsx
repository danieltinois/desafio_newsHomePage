import React from "react";
import styles from "./news.module.scss";
import image_web_desktop from "../../assets/images/image-web-3-desktop.jpg";
import img_1 from "../../assets/images/image-retro-pcs.jpg";
import img_2 from "../../assets/images/image-top-laptops.jpg";
import img_3 from "../../assets/images/image-gaming-growth.jpg";

const News = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main_home}>
          <img
            src={image_web_desktop}
            alt="web-desktop"
            width="750vw"
            height="300vh"
            className={styles.image_web_desktop}
          />
          <div className={styles.content_home}>
            <div className={styles.h1_home}>
              <h1>
                The Bright
                <br />
                Future of
                <br />
                Web 3.0?
              </h1>
            </div>
            <div className={styles.readMore}>
              <p>
                We dive into the next evolution of the web that
                <br />
                claims to put the power of the platforms back
                <br />
                into the hands of the people. But is it really
                <br />
                fulfilling its promise?
              </p>
              <button className={styles.bnt_readMore}>read more</button>
            </div>
          </div>
        </div>
        <div className={styles.content_news}>
          <div className={styles.main_new}>
            <ul>
              <h1>New</h1>
              <li>
                <h2>Hydrogen VS Eletric Cars</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique dolore.
                </p>
              </li>
              <li>
                <h2>The Downsides of Al Artistry</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique dolore.
                </p>
              </li>
              <li>
                <h2>Is VC Funding Drying Up?</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique dolore.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        {/* Classe lista com imgs */}
        {/* <ul className={styles.lista_imgs}>
          <img src={img_1} alt="01" className={styles.imgs} />
          <li>
            <li className={styles.teste2}>
              <h2>01</h2>
              <p>aa</p>
            </li>
          </li>
          <img src={img_2} alt="02" className={styles.imgs} />
          <li>
            <li className={styles.teste2}>
              <h2>02</h2>
              <p>aa</p>
            </li>
          </li>
          <img src={img_3} alt="03" className={styles.imgs} />
          <li>
            <li className={styles.teste2}>
              <h2>03</h2>
              <p>aa</p>
            </li>
          </li>
        </ul> */}

        <ul className={styles.testeUl}>
          <li className={styles.testeLi}>
            <img src={img_1} alt="" className={styles.imgs} />
            <li className={styles.testeLi2}>
              <h1 className={styles.testeh1}>01</h1>
              <h2 className={styles.testeh2}>Reviving Retro Pcs</h2>
              <p className={styles.testep}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </li>
          </li>
          <li className={styles.testeLi}>
            <img src={img_2} alt="" className={styles.imgs} />
            <li className={styles.testeLi2}>
              <h1 className={styles.testeh1}>02</h1>
              <h2 className={styles.testeh2}>Top 10 Laptops of 2022</h2>
              <p className={styles.testep}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </li>
          </li>
          <li className={styles.testeLi}>
            <img src={img_3} alt="" className={styles.imgs} />
            <li className={styles.testeLi2}>
              <h1 className={styles.testeh1}>03</h1>
              <h2 className={styles.testeh2}>The Growth of Gaming</h2>
              <p className={styles.testep}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </li>
          </li>
        </ul>
      </div>
    </>
  );
};

export default News;
