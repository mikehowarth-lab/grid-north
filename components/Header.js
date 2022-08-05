import Link from "next/link";
import styles from "../pages/index.module.css";
  
  const Header = () => (
    <div className="Header">
         <header className={styles.header}>
         <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          <div className={styles.logos}>
            <nav class="header_nav">
              <ol class="header_links">
                  <li class="header_link">
                    <a href="/">Home</a>
                  </li>
                  <li class="header_link">
                    <a href="/about">About</a>
                  </li>
                  <li class="header_link">
                    <a href="/blog">Blog</a>
                  </li>
              </ol>
          </nav>
          <a href="/">
              <img src="compass.svg" id="compass" alt="Grid North" width="60px" align="right"/>
          </a>
          </div>
         
        </header>
    </div>
  );
  
  export default Header;