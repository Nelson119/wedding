// DODO   Storage 加密
/**
 * setStorage
 * @param {string} key
 * @param {string, object} val
 */
export const setStorage = (key, val) => {
  if (key && (val || typeof val === "boolean" || typeof val === "number")) {
    localStorage.setItem(key, JSON.stringify(val));
  } else {
    console.error("儲存 localstorage 的格式錯誤，請確認有設定相關的數值");
  }
};

/**
 * getStorage(get)
 * @param {string} key
 */
export const getStorage = key => {
  if (key) {
    let val = localStorage.getItem(key);
    return JSON.parse(val);
  } else {
    console.error("儲存 localstorage 的格式錯誤，請確認有設定相關的數值");
  }
};
