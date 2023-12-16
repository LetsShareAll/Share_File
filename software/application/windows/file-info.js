/**
 * 文件信息对象，包含提取码和文件重定向URL。
 * @type {Object}
 * @property {string} extractCode - 提取码，默认为空字符串。
 * @property {string} redirectURL - 文件重定向URL。
 */
const redirectFileInfo = {
  extractCode: '',
  redirectURL: ''
}

/**
 * 包含文件信息的数组。
 * @type {Array}
 */
const fileList = [
  {
    iconClass: 'icon-executable',
    name: 'Parsec.exe',
    type: 'Windows 应用程序',
    version: '150-82a',
    date: '2022/04/26',
    description: '远程控制'
  }
]
