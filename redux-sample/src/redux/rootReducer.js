// 作成した全てのreducerをcreateStoreの引数として渡す
import { combineReducers } from "redux";
import { count } from "./count/reducer";

// 全てのreducerを１つにまとめる
const rootReducer = combineReducers({ count });

export default rootReducer;

