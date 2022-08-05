import Link from "next/link";
import styles from "../pages/index.module.css";
  
  const Header = () => (
    <div className="Header">
         <header className={styles.header}>
          <div className={styles.logos}>
              <img src="compass.svg" id="compass" alt="Grid North" width="100px"/>
          </div>
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
          <h1>Grid North</h1>
          <p>
            Setting out on a new bearing and building a new future...
          </p>
        </header>
    </div>
  );
  
  export default Header;