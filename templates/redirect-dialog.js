/**
 * 根据提供的信息显示对话框。
 * @param {Object} info - 包含对话框信息的对象。
 * @property {string} redirectURL - 文件重定向URL。
 * @property {string} redirectPromptHTML - 文件重定向提醒HTML。
 * @property {string} extractCode - 文件提取码。
 */
function showDialog(info) {
  console.log(info)
  // 判断条件：当redirectPromptHTML和extractCode都为空或未定义时不显示对话框
  if (!info.redirectPromptHTML && !info.extractCode) {
    redirectToURL(info.redirectURL, 0)
    return
  }

  applyStyles('.overlay', { display: 'flex' })
  applyStyles('.dialog-url', { display: 'block' })

  // 判断条件：当extractCode为空时不展示提取码
  const showExtractCode = !!info.extractCode

  // 判断条件：当redirectPromptHTML为空时不展示提醒内容
  const showRedirectPromptHTML = !!info.redirectPromptHTML

  // 判断条件：当showRedirectPromptHTML为true时设置提醒内容
  if (showRedirectPromptHTML) {
    applyStyles('.dialog-prompt', { display: 'block' })
  }

  // 判断条件：当showExtractCode为true时设置提取码
  if (showExtractCode) {
    applyStyles('.dialog-code', { display: 'block' })
  }
}

/**
 * 关闭对话框的函数。
 * 隐藏对话框元素。
 * @param {string} dialogElementSelector - 对话框元素的选择器。
 */
function closeDialog(dialogElementSelector) {
  const dialogContainer = document.querySelector(dialogElementSelector)
  if (dialogContainer) {
    dialogContainer.style.display = 'none'
  } else {
    console.error(`Dialog element not found: ${dialogElementSelector}`)
  }
}

/**
 * 选中文本框内的内容。
 * @param {HTMLInputElement} inputElement - 输入框元素。
 */
function selectText(inputElement) {
  inputElement.select()
}

showDialog(redirectFileInfo)
