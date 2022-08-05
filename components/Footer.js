
import Link from "next/link";
import styles from "../pages/index.module.css";

  const Footer = () => (
    <div className={styles.footer}>
      <ol class="footer_links">
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/newsletter">Newsletter</a></li>
      </ol>
      <div class="copyright">Grid North &copy; 2022</div>
    </div>
  );
  
  export default Footer;