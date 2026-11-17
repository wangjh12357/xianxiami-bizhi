"use strict";
require("../common/vendor.js");
function formatTimeAgo(timestamp) {
  const now = /* @__PURE__ */ new Date();
  const inputTime = new Date(timestamp);
  const diffMs = now - inputTime;
  const diffMinutes = Math.floor(diffMs / (1e3 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  if (diffMinutes < 1) {
    return "刚刚";
  } else if (diffMinutes < 60) {
    return `${diffMinutes}分钟前`;
  } else if (diffHours < 24) {
    return `${diffHours}小时前`;
  } else if (diffDays < 30) {
    return `${diffDays}天前`;
  } else if (diffMonths < 3) {
    return `${diffMonths}月前`;
  } else {
    return null;
  }
}
exports.formatTimeAgo = formatTimeAgo;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/common.js.map
