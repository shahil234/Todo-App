import React from "react";
import { MainApp } from "./components/export";
import { todoStore } from "./utils/store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={todoStore}>
        <MainApp />
      </Provider>
    </div>
  );
}

export default App;
