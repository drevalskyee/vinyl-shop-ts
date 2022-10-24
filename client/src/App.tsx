import React, { FC } from "react";
import { Provider } from "react-redux";
import { GlobalStyles } from "./App.styles";
import { Router } from "./router/Router";
import { store } from "./store/index";

const App: FC = () => {
  GlobalStyles();
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export { App };
