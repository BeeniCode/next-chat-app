import ChatRoom from "@/Components/ChatRoom";
import { MyContext } from "@/context/MyContext";
import { auth, db } from "@/firebaseConfig";
import Head from "next/head";
import { useContext } from "react";
auth;
export default function Home() {
  const { user } = useContext(MyContext);

  return (
    <>
      <Head>
        <title>Next Chat App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        {user && <ChatRoom user={user} db={db} />}
      </div>
    </>
  );
}
