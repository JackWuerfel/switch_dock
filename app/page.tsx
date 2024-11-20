
import ClientWrapper from "./components/client-wrapper";
import Navbar from "./components/navbar";

const Home = async () => {

  return (
    <>
      <Navbar />
      <main>
        <ClientWrapper/>
      </main>
    </>
  );
};

export default Home;
