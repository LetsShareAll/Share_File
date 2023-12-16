/**
 * 动态加载脚本文件并执行回调函数。
 * @param {string} url - 脚本文件的路径。
 * @param {Function} callback - 脚本加载完成后执行的回调函数。
 */
function loadScript(url, callback) {
  var scriptElement = document.createElement("script");
  scriptElement.setAttribute("src", url);

  scriptElement.onload = callback;

  document.body.appendChild(scriptElement);
};

// 当 DOMContentLoaded 事件触发时执行以下代码
document.addEventListener("DOMContentLoaded", function () {
  // 动态加载脚本文件 file-info.js
  loadScript("./file-info.js");

  // 动态加载脚本文件 template-utils.js
  loadScript("/scripts/template-utils.js");

  // 动态加载脚本文件 page-utils.js，并在加载完成后执行回调函数
  loadScript("/scripts/page-utils.js", function () {
    // 当 page-utils.js 加载完成后执行以下操作

    // 设置页面标题
    setPageTitle();

    // 更新文件重定向地址
    updateFileRedirectURL(fileRedirectURL);
  });

  // 动态加载脚本文件 load-template.js
  loadScript("/scripts/load-template.js");
});
