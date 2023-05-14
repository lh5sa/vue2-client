// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// + 全局扩展(全局 filter)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import Vue from "vue";
import * as filters from "./filters";

// 全局过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});
