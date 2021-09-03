import App, { AppProps } from "next/app";
import "../styles/layout.css";
import "../styles/global.css";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
