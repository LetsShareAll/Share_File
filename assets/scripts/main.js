/**
 * 包装 loadScript 函数，返回一个 Promise，用于异步加载脚本文件。
 * @param {string} url - 脚本文件的路径。
 * @returns {Promise} - 表示脚本加载完成的 Promise。
 */
function loadScriptAsync(url) {
  return new Promise((resolve, reject) => {
    // 创建 <script> 元素
    const scriptElement = document.createElement('script')
    scriptElement.setAttribute('src', url)

    // 在脚本加载完成或失败时触发相应的操作
    scriptElement.onload = resolve
    scriptElement.onerror = reject

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
    await loadScriptAsync('/assets/scripts/constants.js')
    await loadScriptAsync('./file-info.js')
    await loadScriptAsync('/assets/scripts/template-utils.js')
    await loadScriptAsync('/assets/scripts/page-utils.js')

    // 设置页面标题
    setPageTitle(pageTitleSuffix)

    // 处理文件重定向
    handleRedirect(redirectFileInfo)

    // 异步加载脚本文件
    await loadScriptAsync('/assets/scripts/load-template.js')
  } catch (error) {
    // 捕获加载脚本失败的错误
    console.error('脚本加载失败：', error)
  }
})

