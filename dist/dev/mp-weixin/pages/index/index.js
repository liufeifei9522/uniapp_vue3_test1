"use strict";
var common_vendor = require("../../common/vendor.js");
var _imports_0 = "/static/images/logo.png";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    common_vendor.ref("Hello");
    return (_ctx, _cache) => {
      return {
        a: _imports_0
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/liufeifei/TEST/uni-preset-vue-vite-ts/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
