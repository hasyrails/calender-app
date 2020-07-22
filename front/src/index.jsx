import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import DayjsUnits from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import CalendarBoard from "./components/CalendarBoard/container";

import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

import rootReducer from "./redux/rootReducer";

import Navigation from "./components/Navigation/container";

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <MuPickerUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
    </MuPickerUtilsProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
