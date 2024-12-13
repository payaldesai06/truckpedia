/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
import axiosReq from "axios";
import { encodeRFC5987ValueChars } from "../helpers/helper";

const actions = {
  // /////////////////////////////////////////////
  // COMPONENTS
  // /////////////////////////////////////////////

  // Vertical NavMenu
  updateVerticalNavMenuWidth({ commit }, width) {
    commit("UPDATE_VERTICAL_NAV_MENU_WIDTH", width);
  },

  // VxAutoSuggest
  updateStarredPage({ commit }, payload) {
    commit("UPDATE_STARRED_PAGE", payload);
  },

  // The Navbar
  arrangeStarredPagesLimited({ commit }, list) {
    commit("ARRANGE_STARRED_PAGES_LIMITED", list);
  },
  arrangeStarredPagesMore({ commit }, list) {
    commit("ARRANGE_STARRED_PAGES_MORE", list);
  },

  // /////////////////////////////////////////////
  // UI
  // /////////////////////////////////////////////

  toggleContentOverlay({ commit }) {
    commit("TOGGLE_CONTENT_OVERLAY");
  },
  updateTheme({ commit }, val) {
    commit("UPDATE_THEME", val);
  },

  // /////////////////////////////////////////////
  // User/Account
  // /////////////////////////////////////////////

  updateUserInfo({ commit }, payload) {
    commit("UPDATE_USER_INFO", payload);
  },

  uploadFileToS3({ commit }, payload) {
    return axiosReq.put(payload.url, payload.file, {
      headers: {
        "Content-Disposition":
          "attachment; filename*=UTF-8''" +
          encodeRFC5987ValueChars(payload.file.name),
      },
    });
  },

  uploadFileToS3ViaPresignedUrl({ commit }, payload) {
    if (!payload.hasOwnProperty("setImagePreviewHeaders")) {
      payload.setImagePreviewHeaders = true;
    }

    const s3UploadHeaders = {
      // "Content-Type" : "application/pdf",
      "Content-Disposition":
        "inline; filename*=UTF-8''" +
        encodeRFC5987ValueChars(payload.file.name),
    };
    if (payload.extension) {
      const extension = payload.extension.toLowerCase();
      if (extension == "pdf") {
        s3UploadHeaders["Content-Type"] = "application/pdf";
      } else if (
        payload.setImagePreviewHeaders &&
        (extension == "jpeg" || extension == "jpg")
      ) {
        s3UploadHeaders["Content-Type"] = "image/jpeg";
      } else if (payload.setImagePreviewHeaders && extension == "png") {
        s3UploadHeaders["Content-Type"] = "image/png";
      }
    }
    return axiosReq.put(payload.url, payload.file, {
      headers: s3UploadHeaders,
      onUploadProgress: (progressEvent) => {
        if (payload.onUploadProgress) {
          payload.onUploadProgress(progressEvent);
        }
      },
    });
  },
  updateFilter({commit}, filter){
    commit("UPDATE_FILTER", filter);
  },
};

export default actions;
