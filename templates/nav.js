var url = window.location.href
var pattern = /^(https?:\/\/[^\/]+)(\/.*)/
var match = url.match(pattern)

var baseURL = ''
var path = ''
var pathParts = []

if (match) {
  baseURL = match[1]
  path = match[2]
  pathParts = path.split(/\/+/)
}

// 获取现有的 <h3> 元素
var pathElement = document.getElementById('path')

// 添加基础链接
var baseLinkElement = document.createElement('a')
baseLinkElement.href = baseURL
baseLinkElement.innerText = 'root'
pathElement.appendChild(baseLinkElement)

for (var i = 0; i < pathParts.length; i++) {
  var pathPart = pathParts[i]

  if (pathPart !== '') {
    var linkElement = document.createElement('a')
    // 使用 decodeURIComponent 解码路径部分
    linkElement.href = baseURL + '/' + pathParts.slice(1, i + 1).join('/')
    linkElement.innerText = decodeURIComponent(pathPart)
    pathElement.appendChild(linkElement)
  }

  if (i < pathParts.length - 2) {
    var separatorElement = document.createTextNode('/')
    pathElement.appendChild(separatorElement)
  }
}
