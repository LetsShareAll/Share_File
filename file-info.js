/**
 * 文件信息对象，包含提取码和文件重定向URL。
 * @type {Object}
 * @property {string} extractCode - 提取码，默认为空字符串。
 * @property {string} redirectURL - 文件重定向URL。
 */
const redirectFileInfo = {
  extractCode: '',
  redirectURL: '',
  redirectPromptHTML: ''
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
const fileList = [
  {
    iconClass: 'icon-directory',
    name: 'document',
    type: '文件夹',
    version: '-',
    date: '2023/12/15',
    description: '文档'
  },
  {
    iconClass: 'icon-directory',
    name: 'music',
    type: '文件夹',
    version: '-',
    date: '2023/12/15',
    description: '音乐'
  },
  {
    iconClass: 'icon-directory',
    name: 'other',
    type: '文件夹',
    version: '-',
    date: '2022/05/26',
    description: '其它'
  },
  {
    iconClass: 'icon-directory',
    name: 'picture',
    type: '文件夹',
    version: '-',
    date: '2023/12/14',
    description: '图片'
  },
  {
    iconClass: 'icon-directory',
    name: 'software',
    type: '文件夹',
    version: '-',
    date: '2023/12/15',
    description: '软件'
  },
  {
    iconClass: 'icon-directory',
    name: 'video',
    type: '文件夹',
    version: '-',
    date: '2023/12/14',
    description: '视频'
  }
]

