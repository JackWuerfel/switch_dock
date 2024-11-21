import ClientWrapper from "./components/client-wrapper";
import Navbar from "./components/navbar";

const Home = () => {
  return (
    <div data-testid="home-page-render">
      <Navbar />
      <main>
        <ClientWrapper />
      </main>
    </div>
  );
};

export default Home;
