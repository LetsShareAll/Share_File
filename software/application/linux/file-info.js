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
    name: 'FFmpeg.tar.gz',
    type: 'Tar 格式压缩包',
    version: '5.1.2',
    date: '2022/12/03',
    description: '媒体转换'
  },
  {
    iconClass: 'icon-archive',
    name: 'LibIconv.tar.gz',
    type: 'Tar 格式压缩包',
    version: '1.17',
    date: '2022/12/03',
    description: '字符编码转换库'
  },
  {
    iconClass: 'icon-archive',
    name: 'OpenCore-AMR.tar.gz',
    type: 'Tar 格式压缩包',
    version: '0.1.6',
    date: '2022/12/03',
    description: 'AMR 音频转换库'
  },
  {
    iconClass: 'icon-archive',
    name: 'Python.tar.gz',
    type: 'Tar 格式压缩包',
    version: '3.11.0',
    date: '2022/12/03',
    description: 'Python'
  }
]
