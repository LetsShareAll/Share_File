/**
 * 文件信息对象，包含提取码和文件重定向URL。
 * @type {Object}
 * @property {string} extractCode - 提取码，默认为空字符串。
 * @property {string} redirectURL - 文件重定向URL。
 */
const redirectFileInfo = {
  extractCode: '',
  redirectURL:
    ''
}

/**
 * 包含文件信息的数组。
 * @type {Array}
 */
const fileList = [
  {
    iconClass: 'icon-directory',
    name: 'linux',
    type: '文件夹',
    version: '-',
    date: '2022/12/03',
    description: 'Linux 平台应用程序'
  },
  {
    iconClass: 'icon-directory',
    name: 'windows',
    type: '文件夹',
    version: '-',
    date: '2022/04/26',
    description: 'Windows 平台应用程序'
  }
]
