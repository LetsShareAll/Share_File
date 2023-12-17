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
 * 处理文件重定向和提取码显示。
 * @param {FileInfo} fileInfo - 包含文件信息的对象。
 */
function handleRedirect(fileInfo) {
  // 当 redirectURL 不为空时执行更新
  if (fileInfo.redirectURL) {
    // 如果提取码不为空
    if (fileInfo.extractCode) {
      // 使用 prompt 显示提取码，并让用户手动点击复制
      alert(
        '请手动选择文本并按 Ctrl + C 或 Cmd + C 复制，然后点击确定以继续跳转至其它网页。\n' +
          '\n提取码：' +
          fileInfo.extractCode
      )

      // 创建新的 meta 元素
      const newMetaElement = document.createElement('meta')
      newMetaElement.setAttribute('http-equiv', 'Refresh')
      newMetaElement.setAttribute('content', `0; URL=${fileInfo.redirectURL}`)

      // 将新的 meta 元素插入到头部
      document.head.appendChild(newMetaElement)
    }
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
