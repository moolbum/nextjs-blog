import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import ProfileImage from "../../public/images/profile.jpeg";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <div>
        <h1>First Post</h1>
        <Link href="/">
          <a>Back to home</a>
        </Link>
        <Image src={ProfileImage} height={400} width={400} alt="프로필" />
      </div>
    </Layout>
  );
}
