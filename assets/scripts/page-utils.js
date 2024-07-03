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
 * 执行页面重定向。
 * @param {string} redirectURL - 要重定向到的 URL。
 * @param {number} delay - 重定向延迟时间（以毫秒为单位）。
 * @example
 * // 在 3 秒后将页面重定向到 "https://example.com"
 * redirectToURL('https://example.com', 3000);
 */
function redirectToURL(redirectURL, delay) {
  // 创建包含重定向信息的 meta 元素
  const metaInfo = {
    httpEquiv: 'Refresh',
    content: `${delay / 1000}; URL=${redirectURL}`
  }

  // 插入 meta 元素到头部，实现页面重定向
  createAndInsertMetaElement(metaInfo)
}

/**
 * 创建并插入包含 meta 信息的 meta 元素到头部。
 * @param {Object} metaInfo - 包含 meta 信息的对象。
 * @property {string} httpEquiv - meta 标签的 http-equiv 属性。
 * @property {string} content - meta 标签的 content 属性。
 * @property {string} [name] - meta 标签的 name 属性（可选）。
 * @property {string} [charset] - meta 标签的 charset 属性（可选）。
 */
function createAndInsertMetaElement(metaInfo) {
  // 创建新的 meta 元素
  const newMetaElement = document.createElement('meta')

  // 设置 meta 标签属性
  if (metaInfo.httpEquiv) {
    newMetaElement.setAttribute('http-equiv', metaInfo.httpEquiv)
  }
  if (metaInfo.content) {
    newMetaElement.setAttribute('content', metaInfo.content)
  }
  if (metaInfo.name) {
    newMetaElement.setAttribute('name', metaInfo.name)
  }
  if (metaInfo.charset) {
    newMetaElement.setAttribute('charset', metaInfo.charset)
  }

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
      '/assets/templates/redirect-dialog.html',
      'body',
      [fileInfo],
      'info',
      '/assets/templates/redirect-dialog.js',
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

/**
 * 修改指定网页元素的样式。
 * @param {string} elementSelector - 要修改样式的元素选择器。
 * @param {Object} styles - 包含要应用的样式的对象。
 * @example
 * // 修改 ID 为 "myElement" 的元素的背景颜色和字体颜色
 * applyStyles('#myElement', { backgroundColor: 'red', color: 'white' });
 */
function applyStyles(elementSelector, styles) {
  const targetElement = document.querySelector(elementSelector)

  if (targetElement) {
    // 使用 Object.assign 将 styles 对象的样式应用到元素
    Object.assign(targetElement.style, styles)
  } else {
    console.error(`Element not found: ${elementSelector}`)
  }
}

