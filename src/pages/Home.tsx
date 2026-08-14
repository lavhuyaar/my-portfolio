import Footer from "../components/Footer";
import Header from "../components/Header";
import TerminalScreen from "../components/TerminalScreen";

const Home = () => {
  return (
    <>
    <Header />
    <section className="w-full flex flex-col p-2 items-center justify-center">
      <TerminalScreen></TerminalScreen>
    </section>
    <Footer />
    </>
  );
};
export default Home;
