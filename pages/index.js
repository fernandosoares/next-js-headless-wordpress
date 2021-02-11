import Head from 'next/head'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Home() {
  const { data, error } = useSWR('/api/page/pagina-exemplo', fetcher)

  if (error) return <div>error</div>
  if (!data) return <div>loading...</div>
  console.log(data)
  return (
    <div>
      <Head>
        <title>Next JS Headless Wordpress</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Next JS Headless Wordpress</h1>
      </main>

      <div>
        <h2>{data.page.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: data.page.content }}></p>
      </div>
    </div>
  )
}
