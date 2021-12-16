export default {
  namespaced: true,
  state: {
    showSetting: false,
  },
  mutations: {
    HANDLE_SHOW_TOUCH(state, value) {
      state.showSetting = value;
    },
  },
  actions: {
    handleTouch(state, value) {
      state.commit("HANDLE_SHOW_TOUCH", value);
    },
  },
  getters: {
    isSetting: (state) => state.showSetting,
  },
};
