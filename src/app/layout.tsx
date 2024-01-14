import Layout from "../components/layout";
import "@/styles/index.css";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000" />
        <meta
          name="description"
          content={`日本全国の有志メンバーが集い、様々なハッカソンなどに挑戦中です。`}
        />
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
