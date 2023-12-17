/**
 * 用于存储已加载的脚本文件的数组。
 * @type {string[]}
 */
var loadedScripts = []

/**
 * 动态加载脚本文件并返回一个 Promise。
 * @param {string} url - 脚本文件的路径。
 * @returns {Promise} - 表示脚本加载完成的 Promise。
 */
async function loadScript(url) {
  return new Promise((resolve) => {
    // 创建 <script> 元素
    var scriptElement = document.createElement('script')
    scriptElement.setAttribute('src', url)

    // 在脚本加载完成后触发 resolve
    scriptElement.onload = resolve

    // 将 <script> 元素添加到 <body> 中
    document.body.appendChild(scriptElement)
  })
}

/**
 * 当 DOMContentLoaded 事件触发时执行以下异步函数。
 */
document.addEventListener('DOMContentLoaded', async function () {
  try {
    // 顺序加载脚本文件，使用 await 确保按顺序加载完成
    await loadScript('/scripts/constants.js')
    await loadScript('./file-info.js')
    await loadScript('/scripts/template-utils.js')
    await loadScript('/scripts/page-utils.js')

    // 设置页面标题
    setPageTitle(pageTitleSuffix)

    // 处理文件重定向
    handleRedirect(redirectFileInfo)

    // 异步加载脚本文件
    await loadScript('/scripts/load-template.js')
  } catch (error) {
    console.error('脚本加载失败：', error)
  }
})
