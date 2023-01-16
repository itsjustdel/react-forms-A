import "react-app-polyfill/ie11";
import "./css/App.css";
import ContactUsForm from "./components/ContactUsForm";

const App = () => {
  return (
    <div className="container">
      <div className="form-container">
        <div className="title">Contact us</div>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default App;
