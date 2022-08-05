import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
import styles from "./index.module.css";

import Layout from "../components/Layout";

export const databaseId = process.env.NOTION_DATABASE_ID;

  
const About = () => {
  return (
    <div>
        <h1>Newsletter</h1>
        <form action="https://tinyletter.com/gridnorth" method="post"><p><label for="tlemail">Enter your email address</label></p><p><input type="text" name="email" id="tlemail" /></p><input type="hidden" value="1" name="embed"/><input type="submit" value="Subscribe" /><p><a href="https://tinyletter.com" target="_blank"></a></p></form>
    </div>
  )
}
  
export default About