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
    name: 'document',
    type: '文件夹',
    version: '-',
    date: '2023/12/15',
    description: '其他'
  },
  {
    iconClass: 'icon-directory',
    name: 'other',
    type: '文件夹',
    version: '-',
    date: '2022/05/26',
    description: '其他'
  },
  {
    iconClass: 'icon-directory',
    name: 'picture',
    type: '文件夹',
    version: '-',
    date: '2022/06/02',
    description: '游戏'
  },
  {
    iconClass: 'icon-directory',
    name: 'software',
    type: '文件夹',
    version: '-',
    date: '2023/12/15',
    description: '应用程序'
  },
  {
    iconClass: 'icon-directory',
    name: 'video',
    type: '文件夹',
    version: '-',
    date: '2023/12/14',
    description: '其他'
  }
]
