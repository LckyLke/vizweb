import Head from "next/head";
import Link from "next/link";

import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import StartChart from "../componets/StartChart";
import axios from "axios";

const viualizeVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

export async function getStaticProps(context) {
  console.log("ok");
  const res = await axios.get("http://localhost:5000/");
  
  
  return { props: { allCharts: res.data } };
}


export default function Home({ allCharts }) {
  
  return (
    <div className="flex flex-col justify-around h-full">
      <StartChart data={allCharts[2]}/>
      <Head>
        <title>Vizweb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center h-4/5 flex flex-col justify-center z-10">
        <h1 className="text-7xl font-bold">
          The best way to{" "}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={viualizeVariants}
            className="text-RED font-mono inline-block"
          >
            visualize
          </motion.div>{" "}
          your data!
        </h1>
        <div className="mt-5 text-xl">
          Vizweb is a quick and easy way to viualize all your data.
          <br />
          Login to safe all your projects and be able to access them from
          anywhere!
        </div>

        <div className="mt-10">
          <Link href="/">
            <motion.a
              whileHover={{ cursor: "pointer", scale: 1.1 }}
              className="text-3xl inline-block bg-BLUE text-BACKGROUND rounded-lg p-3 self-center shadow-xl"
            >
              Get started!
            </motion.a>
          </Link>
          <Link href="/444">
            <motion.a
              whileHover={{ cursor: "pointer", scale: 1.1 }}
              className="ml-10 box-border inline-block text-3xl text-BLUE bg-BACKGROUND rounded-lg p-3 self-center shadow-xl border-2"
            >
              Sign up!
            </motion.a>
          </Link>
        </div>
      </div>
    </div>
  );
}
