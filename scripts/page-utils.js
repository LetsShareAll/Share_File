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
 * 插入文件重定向 URL 的 <meta> 元素。
 * @param {string} redirectURL - 文件重定向 URL。
 */
function updateFileRedirectURL(redirectURL) {
  // 当 newURL 不为空时执行更新
  if (redirectURL) {
    // 创建新的 meta 元素
    const newMetaElement = document.createElement('meta')
    newMetaElement.setAttribute('http-equiv', 'Refresh')
    newMetaElement.setAttribute('content', `0; URL=${redirectURL}`)

    // 将新的 meta 元素插入到头部
    document.head.appendChild(newMetaElement)
  }
}
