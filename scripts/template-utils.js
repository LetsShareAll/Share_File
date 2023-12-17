/**
 * 通过 fetch 获取模板文件并将其插入到指定的元素中。
 * @param {string} sourceTemplatePath - 模板文件的路径。
 * @param {string} targetElementSelector - 要插入内容的目标元素的选择器。
 * @param {Array|false} [dataList] - 包含数据的数组或 false（可选）。
 * @param {string} [rowClass = 'row'] - 要添加到每个行元素的类名（可选），默认为 'row'。
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
    const targetElement = document.querySelector(targetElementSelector)

    if (!targetElement) {
      throw new Error(`${ERROR_TARGET_NOT_FOUND}: ${targetElementSelector}`)
    }

    const response = await fetch(sourceTemplatePath)
    const templateContent = await response.text()

    if (!dataList) {
      // 将获取的 HTML 插入到目标元素中
      targetElement.innerHTML = templateContent

      // 如果提供了脚本路径，则添加 script 标签以插入脚本
      if (scriptPath) {
        const scriptResponse = await fetch(scriptPath)
        const scriptContent = await scriptResponse.text()

        const scriptElement = document.createElement('script')
        scriptElement.text = scriptContent
        document.body.appendChild(scriptElement)
      }

      return
    }

    if (dataList.length === 0) {
      // 如果数据为空，插入提示行或自定义内容
      const emptyRow = document.createElement('tr')
      emptyRow.classList.add('empty-row')
      emptyRow.innerHTML = emptyContent
      targetElement.appendChild(emptyRow)
    } else {
      dataList.forEach((dataItem) => {
        const row = document.createElement('tr')
        row.classList.add(rowClass)

        // 动态生成正则表达式，使用传入的 rowClass 替换占位符中的变量名
        const regex = new RegExp(`\\$\\{${rowClass}\\.([^}]+)}`, 'g')
        row.innerHTML = templateContent.replace(
          regex,
          (match, p1) => dataItem[p1]
        )

        targetElement.appendChild(row)
      })
    }
  } catch (error) {
    console.error(
      `${ERROR_FETCHING_TEMPLATE}: ${sourceTemplatePath}:`,
      error.message
    )
  }
}
