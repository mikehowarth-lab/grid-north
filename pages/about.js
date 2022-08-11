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
        <h1>Grid North</h1>
        <blockquote>Grid north is a navigational phrase used to refer to the northward on a grid lines in a map projection. Grid north contrasts the true north and the magnetic north in that it is aligned to grid lines and always points upwards on a map.</blockquote>
        <p>What happens when middle age slowly catches up on you?</p>
        <p>Inertia is hard to overcome, and in a noisy world full of distractions its easy to lose sight of your sense of purpose.</p>
        <p>Grid North is a personal exploration in to how and what I want my future to be.</p>
        <p>How I connect my skills and interests with the lure of a full time employed job and the pursuit of financial independence through indie hacking.</p>
    </div>
  )
}
  
export default About