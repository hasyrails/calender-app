import React from "react";
import ReactDOM from "react-dom";

import CalenderBoard from "./components/CalenderBoard";

import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

const App = () => (
  <div>
    <CalenderBoard/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

