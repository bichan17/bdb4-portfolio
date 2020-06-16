import { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/layout.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
