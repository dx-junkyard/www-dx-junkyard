import { AppProps } from "next/app";
import "../styles/index.css";

export const runtime = "edge";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
