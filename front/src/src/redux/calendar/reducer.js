import dayjs from "dayjs";

const day = dayjs();

const init = {
  year: day.year(),
  month: day.month() + 1 //{ 0,1 〜 11 } + 1
};

