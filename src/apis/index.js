import request from "../utils/request";
/**
 * 获取轮播图列表
 */
export function getBannerList() {
  return request.get("/banner?type=1");
}
/**
 * 获取推荐歌单
 */
export function getMusicList() {
  return request.get("/personalized?limit=8");
}
/**
 * 获取独家放送列表
 */
export function getExclusiveList() {
  return request.get("/personalized/privatecontent");
}
/**
 * 获取流行歌单列表
 */
export function getFashionList() {
  return request.get("/top/playlist/highquality?cat='流行'&limit=3");
}
/**
 * 获取最新mv
 */
export function getNewMv() {
  return request.get("/mv/first?limit=3");
}
/**
 * 获取推荐电台
 */
export function getRecommendRadio() {
  return request.get("/program/recommend");
}
