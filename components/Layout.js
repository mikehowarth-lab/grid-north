import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

import styles from "../pages/index.module.css";

const Layout = ({ children }) => {
return (
	<>
	
  <main className={styles.container}>
    <Header />
	 {children}
	  <Footer />
   </main>
	</>
);
};

export default Layout;




