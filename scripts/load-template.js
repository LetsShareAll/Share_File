// 导入 header，并插入 header.js
importAndRenderTemplate(
  '/templates/header.html',
  '#header',
  false,
  '',
  '/scripts/header.js',
  emptyContent
)

// 导入 nav，并插入 nav.js
importAndRenderTemplate(
  '/templates/nav.html',
  '#nav',
  false,
  '',
  '/scripts/nav.js',
  emptyContent
)

// 导入 file-list，并插入 file-list.js
importAndRenderTemplate(
  '/templates/file-list.html',
  '#file-list',
  false,
  '',
  '/scripts/file-list.js',
  emptyContent
)
