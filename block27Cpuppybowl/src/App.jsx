import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import Puppies from "./puppies";

function App() {
  return (
    <Provider store={store}>
      <Puppies />
    </Provider>
  );
}

export default App;
