/**
 * 文件信息对象，包含提取码和文件重定向URL。
 * @type {Object}
 * @property {string} extractCode - 提取码，默认为空字符串。
 * @property {string} redirectURL - 文件重定向URL。
 */
const redirectFileInfo = {
  extractCode: '5c8e',
  redirectURL: 'https://www.alipan.com/s/yAziQgqefpL',
  redirectPromptHTML:
    '请注意复制提取码，在下载文件后请去除文件尾部的“.pdf”后缀！完成以后点击确认将跳转至阿里云盘。'
}

/**
 * 包含文件信息的数组。
 * @type {Array}
 * @propty {string} iconClass - 文件图标的 CSS 类。
 * @propty {string} name - 文件或文件夹的名称。
 * @propty {string} type - 文件或文件夹的类型，可以是 '文件' 或 '文件夹' 等。
 * @propty {string} version - 文件的版本信息。
 * @propty {string} date - 文件或文件夹的创建日期。
 * @propty {string} description - 文件或文件夹的描述信息。
 */
const fileList = []
