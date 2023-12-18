/**
 * 设置页面标题为当前路径加上指定后缀。
 * @param {string} [suffix='Share File'] - 要添加到页面标题的后缀，默认为 Share File。
 */
function setPageTitle(suffix = 'Share File') {
  // 获取当前页面的路径
  const currentPath = window.location.pathname

  // 将路径渲染到网页标题中，附带指定的后缀
  document.title = `${currentPath} - ${suffix}`
}

/**
 * 创建并插入包含重定向信息的 meta 元素到头部。
 * @param {string} redirectURL - 重定向的URL。
 */
function createAndInsertMetaElement(redirectURL) {
  // 创建新的 meta 元素
  const newMetaElement = document.createElement('meta')
  newMetaElement.setAttribute('http-equiv', 'Refresh')
  newMetaElement.setAttribute('content', `0; URL=${redirectURL}`)

  // 将新的 meta 元素插入到头部
  document.head.appendChild(newMetaElement)
}

/**
 * 处理文件重定向和提取码显示。
 * @param {FileInfo} fileInfo - 包含文件信息的对象，其中包括提取码、跳转提醒内容和提取码提示。
 */
function handleRedirect(fileInfo) {
  // 当 redirectURL 不为空时执行更新
  if (fileInfo.redirectURL) {
    // 使用自定义弹出窗口替换整个页面显示跳转提醒内容
    importAndRenderTemplate(
      '/templates/redirect-dialog.html',
      'body',
      [fileInfo],
      'info',
      '/scripts/redirect-dialog.js',
      ''
    )
  }
}

/**
 * 向指定元素插入 HTML。
 * @param {string} targetElementId - 目标元素的 ID。
 * @param {string} htmlContent - 要插入的 HTML 字符串。
 */
function insertHTML(targetElementId, htmlContent) {
  const targetElement = document.getElementById(targetElementId)

  // 使用 const 替代 let，因为 targetElement 不会被重新赋值
  if (targetElement) {
    targetElement.innerHTML = htmlContent
  } else {
    console.error(`${TARGET_NOT_FOUND_ERROR}（ID: ${targetElementId}）。`)
  }
}
