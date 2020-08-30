import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import CalendarBoard from "./components/CalendarBoard/container";

import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

import rootReducer from "./redux/rootReducer";

import ToDos from "./components/todos"

import Navigation from "./components/Navigation/container";

import AddScheduleDialog from "./components/AddScheduleDialog/container";

import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";

import styled, { createGlobalStyle } from 'styled-components'

const store = createStore(rootReducer);

const GlobalStyle = createGlobalStyle`
html, body, app {
height: 100%;
}
body {
/* https://css-tricks.com/snippets/css/system-font-stack/ */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;

  overflow-wrap: break-word;
}
`


const App = () => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <ToDos />
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
      <CurrentScheduleDialog />
    </MuiPickersUtilsProvider>
  </Provider>
);

ReactDOM.render(
<>
  <GlobalStyle />
    <App />,
</>,
 document.getElementById("root"));
