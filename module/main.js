import app from "@/main";
import { setStorage, getStorage } from "../utils";

const i18nStorageKey = "__global_front_stage_i18n";
const state = {
  locale: getStorage(i18nStorageKey) ? getStorage(i18nStorageKey) : "zh-CN",
  langItem: [
    {
      key: "zh-CN",
      value: "简体中文"
    },
    {
      key: "en",
      value: "English"
    }
  ]
};

const actions = {
  LOCALE_HANDLER({ commit, rootGetters }, params) {
    // console.log('rootGetters', rootGetters.config, params);
    commit("SET_LOCALE", params.lang);
    switch (params.lang) {
      case "en":
        commit("SET_WEB_TITLE", rootGetters.config.en_title);
        break;
      default:
        commit("SET_WEB_TITLE", rootGetters.config.title);
    }
  }
};

const mutations = {
  SET_LOCALE(state, payload) {
    state.locale = payload;
    app.$vuetify.lang.current = payload;
    app.$i18n.locale = payload;
    setStorage(i18nStorageKey, payload);
  }
};

const getters = {
  locale: state => state.locale,
  langItem: state => state.langItem
};

export default {
  state,
  actions,
  mutations,
  getters
};
