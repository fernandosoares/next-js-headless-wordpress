import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const router = useRouter();
  const {
    query: { slug },
  } = router;

  const { data, error } = useSWR(`api/page/${slug}`, fetcher);

  if (error) return <div>error</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <Head>
        <title>Next JS Headless Wordpress</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{data.page.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: data.page.content }}></p>
      </main>
    </div>
  );
}
