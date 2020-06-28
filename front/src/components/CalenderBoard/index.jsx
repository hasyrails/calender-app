import React from "react";
import CalendarElement from "../CalendarElement";

import { GridList, Typography } from "@material-ui/core";
import { createCalendar } from "../../services/calendar";

import * as styles from "./style.css";

const calendar = createCalendar();
const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = () => {
  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {days.map(d => (
          <li key={d}>
            <Typography
              className={styles.days}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >
              {d}
            </Typography>
          </li>
        ))}
        {calendar.map(c => (
          <li key={c.toISOString()}>
            <CalendarElement day={c} />
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;
