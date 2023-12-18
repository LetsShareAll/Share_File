/**
 * constants.js - 包含用于 Share_File 网页的常量。
 */

/**
 * 页面标题的后缀，默认为 Share File。
 * @type {string}
 */
const pageTitleSuffix = ''

/**
 * 网页标头显示的标题。
 * @type {string}
 */
const headerTitle =
  '<a href="https://github.com/LetsShareAll/Share_File" title="前往 Github 查看源码">一起分享吧！文件！</a>'

/**
 * 文件为空时插入的内容。
 * @type {string}
 */
const fileEmptyContent = `<td colspan="6">这里空空如也(ˉ▽ˉ；)...</td>`

/**
 * 重定向至阿里云时显示的提醒内容。
 * @type  {string}
 */
const redirectPromptHTMLAliYun =
  '请注意<b>复制提取码，在下载文件后请去除文件尾部的“.pdf”后缀</b>！完成以后点击确认将跳转至阿里云盘。'

/**
 * 找不到目标元素时的错误消息。
 * @type {string}
 */
const ERROR_TARGET_NOT_FOUND = `找不到目标元素`

/**
 * 获取和渲染模板文件时发生错误的错误消息。
 * @type {string}
 */
const ERROR_FETCHING_TEMPLATE = `获取和渲染模板文件时发生错误`

/**
 * 获取和插入时发生错误的错误消息。
 * @type {string}
 */
const ERROR_FETCHING_INSERTING = `获取和插入时发生错误`
