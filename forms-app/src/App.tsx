import "react-app-polyfill/ie11";
import "./css/App.css";
import FormikForm from "./components/FormikForm";

const App = () => {
  return (
    <div className="container">
      <div className="form-container">
        <div className="title">Contact us</div>
        <FormikForm />
      </div>
    </div>
  );
};

export default App;
