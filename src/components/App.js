
import '../App.css';
import Header from "./Header";
import Main from "./Main";
import Team from "./Team";
import Footer from "./Footer";
import Form from "./Form"

function App() {
  return (
    <div className="root">
      <Header />
      <Main />
      <Form />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
