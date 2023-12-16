/**
 * 通过 fetch 获取模板文件并将其插入到指定的元素中。
 * @param {string} filePath - 模板文件的路径。
 * @param {string} targetElementId - 要插入内容的目标元素的 ID。
 * @param {string} [scriptPath] - 要插入的脚本文件的路径（可选）。
 */
function importTemplateAndScript(filePath, targetElementId, scriptPath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((template) => {
      // 将获取的 HTML 插入到目标元素中
      document.getElementById(targetElementId).innerHTML = template;

      // 如果提供了脚本路径，则添加 script 标签以插入脚本
      if (scriptPath) {
        var scriptElement = document.createElement("script");
        scriptElement.setAttribute("src", scriptPath);
        document.body.appendChild(scriptElement);
      }
    })
    .catch((error) => console.error(`Error fetching and inserting ${targetElementId}:`, error));
}

/**
 * 通过 fetch 获取模板文件并将其插入到指定的元素中。
 * @param {string} templatePath - 模板文件的路径。
 * @param {string} targetElementSelector - 要插入内容的目标元素的选择器。
 * @param {Array} dataList - 包含数据的数组。
 * @param {string} rowClass - 要添加到每个行元素的类名。
 */
function renderTemplateRows(templatePath, targetElementSelector, dataList, rowClass) {
  const targetElement = document.querySelector(targetElementSelector);

  fetch(templatePath)
    .then(response => response.text())
    .then(templateContent => {
      if (dataList.length === 0) {
        // 如果数据为空，插入提示行
        const emptyRow = document.createElement('tr');
        emptyRow.classList.add('empty-row');
        emptyRow.innerHTML = '<td colspan="6">这里空空如也(ˉ▽ˉ；)...</td>';
        targetElement.appendChild(emptyRow);
      } else {
        dataList.forEach(dataItem => {
          const row = document.createElement('tr');
          row.classList.add(rowClass);

          // 动态生成正则表达式，使用传入的 rowClass 替换占位符中的变量名
          const regex = new RegExp(`\\$\\{${rowClass}\\.([^}]+)}`, 'g');
          row.innerHTML = templateContent.replace(regex, (match, p1) => dataItem[p1]);

          targetElement.appendChild(row);
        });
      }
    })
    .catch(error => console.error(`Error fetching and rendering template at ${templatePath}:`, error));
}
