/**
 * 通过 fetch 获取模板文件并将其插入到指定的元素中。
 * @param {string} sourceTemplatePath - 模板文件的路径。
 * @param {string} targetElementSelector - 要插入内容的目标元素的选择器。
 * @param {Array|false} [dataList] - 包含数据的数组或 false（可选）。
 * @param {string} [rowClass = 'row'] - 要添加到每个行元素的类名（可选），默认为 row。
 * @param {string} [scriptPath] - 要插入的脚本文件的路径（可选）。
 * @param {string} [emptyContent] - 数据为空时插入的内容（可选）。
 */
async function importAndRenderTemplate(
  sourceTemplatePath,
  targetElementSelector,
  dataList,
  rowClass = 'row',
  scriptPath = '',
  emptyContent = `<td colspan="6">这里空空如也(ˉ▽ˉ；)...</td>`
) {
  try {
    // 获取目标元素
    const targetElement = document.querySelector(targetElementSelector)

    // 检查目标元素是否存在
    if (!targetElement) {
      throw new Error(`${ERROR_TARGET_NOT_FOUND}: ${targetElementSelector}`)
    }

    // 获取模板内容
    const templateContent = await fetchTemplateContent(sourceTemplatePath)

    if (!dataList) {
      // 将获取的 HTML 插入到目标元素中
      renderTemplate(targetElement, templateContent)

      // 如果提供了脚本路径，则添加 script 标签以插入脚本
      if (scriptPath) {
        await loadScriptAsync(scriptPath)
      }

      return
    }

    if (dataList.length === 0) {
      // 如果数据为空，插入提示行或自定义内容
      renderEmptyContent(targetElement, emptyContent)
    }
    if (dataList.length === 1) {
      // 渲染数据列表
      renderDataList(targetElement, dataList, templateContent, rowClass)

      // 如果提供了脚本路径，则添加 script 标签以插入脚本
      if (scriptPath) {
        await loadScriptAsync(scriptPath)
      }

      return
    } else {
      // 渲染数据列表
      renderDataList(targetElement, dataList, templateContent, rowClass)
    }
  } catch (error) {
    console.error(
      `${ERROR_FETCHING_TEMPLATE}: ${sourceTemplatePath}:`,
      error.message
    )
  }
}

/**
 * 通过 fetch 获取模板文件内容。
 * @param {string} sourceTemplatePath - 模板文件的路径。
 * @returns {Promise<string>} 模板文件内容的 Promise。
 */
async function fetchTemplateContent(sourceTemplatePath) {
  const response = await fetch(sourceTemplatePath)
  return await response.text()
}

/**
 * 将模板内容插入目标元素。
 * @param {Element} targetElement - 要插入内容的目标元素。
 * @param {string} templateContent - 要插入的模板内容。
 */
function renderTemplate(targetElement, templateContent) {
  targetElement.innerHTML = templateContent
}

/**
 * 通过 fetch 获取脚本文件并将其插入到页面中。
 * @param {string} scriptPath - 脚本文件的路径。
 * @returns {Promise<void>} 插入脚本的 Promise。
 */
async function insertScript(scriptPath) {
  const scriptResponse = await fetch(scriptPath)
  const scriptContent = await scriptResponse.text()

  const scriptElement = document.createElement('script')
  scriptElement.text = scriptContent
  document.body.appendChild(scriptElement)
}

/**
 * 插入空内容到目标元素。
 * @param {Element} targetElement - 要插入内容的目标元素。
 * @param {string} emptyContent - 空内容的 HTML。
 */
function renderEmptyContent(targetElement, emptyContent) {
  const emptyRow = document.createElement('tr')
  emptyRow.classList.add('empty-row')
  emptyRow.innerHTML = emptyContent
  targetElement.appendChild(emptyRow)
}

/**
 * 渲染数据列表到目标元素。
 * @param {Element} targetElement - 要插入内容的目标元素。
 * @param {Array} dataList - 包含数据的数组。
 * @param {string} templateContent - 模板内容。
 * @param {string} rowClass - 行元素的类名。
 */
function renderDataList(targetElement, dataList, templateContent, rowClass) {
  dataList.forEach((dataItem) => {
    const row = document.createElement('tr')
    row.classList.add(rowClass)

    const regex = new RegExp(`\\$\\{${rowClass}\\.([^}]+)}`, 'g')
    row.innerHTML = templateContent.replace(regex, (match, p1) => dataItem[p1])

    targetElement.appendChild(row)
  })
}
