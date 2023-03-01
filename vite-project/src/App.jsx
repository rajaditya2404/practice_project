import Navbar from "./components/Navbar";
import Card from "./components/Card";
import PageLayout from "./components/PageLayout";
const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <PageLayout >
        <div>
          <section>
            <Card />
          </section>
          <section>
            <Card />
          </section>
          <section>
            <Card />
          </section>
        </div>
      </PageLayout>

      {/* <Card></Card> */}
      {/* <Card/> */}
    </>
  );
};
export default App;
