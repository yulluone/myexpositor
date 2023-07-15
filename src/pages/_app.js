import "@/styles/globals.css";
import { Lexend } from "next/font/google";
import Nav from "../components/Nav";

// If loading a variable font, you don't need to specify the font weight
const lexend = Lexend({ weight: "400", subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={lexend.className}>
      <Nav>
        <Component {...pageProps} />
      </Nav>
    </main>
  );
}
