import Navbar from "@/components/Navbar/Navbar";
import "./globals.scss";
import Test from "@/Test";

export default function Home() {
  return (
    <main>
      <section>
        <Navbar />
      </section>
      <section>PARALLAX</section>
      <section>SERVICES</section>
      <section>PARALLAX</section>
      <section>PORTFOLIO1</section>
      <section>PORTFOLIO2</section>
      <section>CONTACT</section>

      {/* <Test />
      <Test /> */}
    </main>
  );
}
