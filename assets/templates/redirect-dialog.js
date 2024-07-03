/**
 * 根据提供的信息显示对话框。
 * @param {Object} info - 包含对话框信息的对象。
 * @property {string} redirectURL - 文件重定向URL。
 * @property {string} redirectPromptHTML - 文件重定向提醒HTML。
 * @property {string} extractCode - 文件提取码。
 */
function showDialog(info) {
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
 * 关闭对话框和覆盖层，并执行回调函数（如果提供）。
 * @param {string} overlaySelector - 覆盖层的选择器。
 * @param {boolean} [goBack=false] - 是否退回上一级页面。
 * @param {Function} [callback] - 关闭对话框后执行的回调函数。
 */
function closeDialog(overlaySelector, goBack = false, callback) {
  // 获取覆盖层元素
  const overlay = document.querySelector(overlaySelector)

  // 检查覆盖层是否存在
  if (overlay) {
    // 关闭对话框
    overlay.style.display = 'none'

    // 执行回调函数（如果提供）
    if (callback && typeof callback === 'function') {
      callback()
    }

    // 如果需要退回上一级页面
    if (goBack) {
      // 判断浏览器是否支持历史记录
      if (window.history && window.history.back) {
        // 退回上一级
        window.history.back()
      } else {
        console.warn('浏览器不支持历史记录，无法执行退回操作。')
      }
    }
  } else {
    console.warn(`未找到指定的覆盖层元素：${overlaySelector}`)
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
