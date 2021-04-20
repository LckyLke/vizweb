import Head from "next/head";
import Link from "next/link";

import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import StartChart from "../components/StartChart";
import axios from "axios";

import nookies from 'nookies'
import { useRouter } from 'next/router'

import { firebaseAdmin } from "../firebaseAdmin";
import { firebaseClient } from "../firebaseClient";


const viualizeVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

export async function getServerSideProps(ctx) {
  try {
    const cookies = nookies.get(ctx)
    console.log(JSON.stringify(cookies, null, 2));
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token)
    const { uid, email } = token;
    
    return { props: {uid, email} };
  } catch (error) {
    
    return {props: {}}
  }
}

export default function Home({uid, email}) {
  setTimeout(() => {
    console.log("ok");
  }, 0);

  const router = useRouter()
  console.log("the uid:", uid)
  return (
    <div className="flex flex-col justify-around h-full">
      <StartChart />
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
          <Link href={`/dashboard`}>
            <motion.a
              whileHover={{ cursor: "pointer", scale: 1.1 }}
              className="text-3xl inline-block bg-BLUE text-BACKGROUND rounded-lg p-3 self-center shadow-xl"
            >
              {!uid ? "Get started!" : "Dashboard!"}
            </motion.a>
          </Link>
          {!uid ? (
            <Link href="/login">
              <motion.a
                whileHover={{ cursor: "pointer", scale: 1.1 }}
                className="ml-10 box-border inline-block text-3xl text-BLUE bg-BACKGROUND rounded-lg p-3 self-center shadow-xl border-2"
              >
                Login!
              </motion.a>
            </Link>
          ) : (
            <motion.button
              onClick={
                async () => {
                  await firebaseClient
                  .auth()
                  .signOut()
                  .then(() => router.push('/'))
                }
              }
              whileHover={{ cursor: "pointer", scale: 1.1 }}
              className="ml-10 box-border inline-block text-3xl text-BLUE bg-BACKGROUND rounded-lg p-3 self-center shadow-xl border-2"
            >
              Logout!
            </motion.button>
          )}
          <div className="absolute right-0 bottom-0 h-10 w-10 bg-RED"></div>
        </div>
      </div>
    </div>
  );
}
