import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mint Ventures AI Demo!</title>
        <link rel="icon" href="/MV_favicon.svg" />
      </Head>

      <main>
        <Header title="Welcome to Mint Ventures AI Data Scientist Assistant Demo!" />
        <p className="description">
          This AI agent is designed to assist you in writing and testing code, as well as improving it for debugging purposes and more. Give it a try, and you'll find it to be an invaluable tool in your coding journey.</p> 
          <p>Get started by clicking on the bot icon.
        </p>
      </main>

      <Footer />
    </div>
  )
}
