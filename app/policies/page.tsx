import Navbar from "../components/navbar";
import ClientWrapper from "../components/client-wrapper";
export const dynamic = "force-dynamic";

interface Navigation {
  id: string;
  label: string;
  activeRoute: string;
  routeTo: string;
}

const Policies = async () => {
  const responseNavigation = await fetch(
    "http://localhost:3000/api/navigation"
  );
  const navigation: Navigation[] = await responseNavigation.json();

  return (
    <>
      <Navbar navigation={navigation} />
      <main>
        <ClientWrapper />
      </main>
    </>
  );
};

export default Policies;
