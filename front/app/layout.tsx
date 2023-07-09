import "bootstrap/dist/css/bootstrap.min.css";
import { Open_Sans as OpenSans, Roboto_Slab as Roboto } from "next/font/google";
import Header from "../src/components/CommonLayout/Header";
import Provider from "../src/lib/context";
import "./globals.css";
import Footer from "@/components/CommonLayout/Footer";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const openSans = OpenSans({ subsets: ["latin"], variable: "--font-open-sans" });

export const metadata = {
  title: "Questrade",
  description: "Empréstimos simples e rápido",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${openSans.variable}`}>
        <Provider>
          <main className="min-h-screen flex flex-col">
            <Header />
            <div className="grow">{children}</div>
            <Footer />
          </main>
        </Provider>
        <script
          src="//code.tidio.co/daskhsnbjp6a2hc8whmbjgzqysdjkw5a.js"
          async
        ></script>
      </body>
    </html>
  );
}
