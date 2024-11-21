import ClientWrapper from "../components/client-wrapper";
import Navbar from "../components/navbar";

const Safety = () => {
  return (
    <div data-testid="safety-page-render">
      <Navbar />
      <main>
        <ClientWrapper />
      </main>
    </div>
  );
};

export default Safety;
