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
