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
 * @propty {string} iconClass - 文件图标的 CSS 类。
 * @propty {string} name - 文件或文件夹的名称。
 * @propty {string} type - 文件或文件夹的类型，可以是 '文件' 或 '文件夹' 等。
 * @propty {string} version - 文件的版本信息。
 * @propty {string} date - 文件或文件夹的创建日期。
 * @propty {string} description - 文件或文件夹的描述信息。
 */
const fileList = [
  {
    iconClass: 'icon-archive',
    name: 'Let`s Play All.zip',
    type: '压缩 (zipped) 文件',
    version: '1.19.0.2',
    date: '2022/06/16',
    description: 'Minecraft Java 整合包'
  },
  {
    iconClass: 'icon-archive',
    name: 'Let`s Play All with HMCL.zip',
    type: '压缩 (zipped) 文件',
    version: '1.19.0.2',
    date: '2022/06/16',
    description: '带有 HMCL 的 Minecraft Java 整合包'
  }
]
