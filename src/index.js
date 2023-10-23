import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./App.css";
// useContext
import WindowContext from "./Hooks/Context/WindowSize";
import MenuContext from "./Hooks/Context/Menu";

// ReduxToolkit
import { store, persistor } from "./Hooks/ReduxToolkit/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// fontAwesome
import "./all.min.css";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <WindowContext>
        <MenuContext>
          <Provider store={store}>
            <PersistGate loading={"Loading..."} persistor={persistor}>
              <App />
            </PersistGate>
          </Provider>
        </MenuContext>
      </WindowContext>
    </Router>
  </React.StrictMode>
);
