// 导入 header，并插入 header.js
importAndRenderTemplate(
  '/templates/header.html',
  '#header',
  false,
  '',
  '/templates/header.js',
  fileEmptyContent
)

// 导入 nav，并插入 nav.js
importAndRenderTemplate(
  '/templates/nav.html',
  '#nav',
  false,
  '',
  '/templates/nav.js',
  fileEmptyContent
)

// 导入 file-list，并插入 file-list.js
importAndRenderTemplate(
  '/templates/file-list.html',
  '#file-list',
  false,
  '',
  '/templates/file-list.js',
  fileEmptyContent
)
