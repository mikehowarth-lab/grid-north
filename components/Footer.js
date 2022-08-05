
import Link from "next/link";
import styles from "../pages/index.module.css";

  const Footer = () => (
    <div className={styles.footer}>
      <ol class="footer_links">
        <li><a href="/newsletter">Newsletter</a></li>
      </ol>
    </div>
  );
  
  export default Footer;