import Navbar from "../components/navbar";
import ClientWrapper from "../components/client-wrapper";

const Policies = () => {
  return (
    <div data-testid="policies-page-render">
      <Navbar />
      <main>
        <ClientWrapper />
      </main>
    </div>
  );
};

export default Policies;
