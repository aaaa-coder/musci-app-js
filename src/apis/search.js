import request from "../utils/request";
// 获取简易版的热搜列表
export function getHotSearchList() {
  return request.get("/search/hot");
}
// 获取详细热搜列表
export function getDetailHotSearchList() {
  return request.get("/search/hot/detail");
}
// 获取歌手分类列表
export function getSingerTypeList() {
  return request.get("/artist/list?limit=3");
}
