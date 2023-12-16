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
}

document.addEventListener("DOMContentLoaded", function () {
  // 动态加载脚本
  loadScript("./file-info.js")
  loadScript("/scripts/page-utils.js", function () {
    // page-utils.js 加载完成后执行
    // 设置页面标题
    setPageTitle();
    updateFileRedirectURL(fileRedirectURL);
  });
  loadScript("/scripts/template-utils.js");
  loadScript("/scripts/load-template.js");
});
