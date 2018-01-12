export default function renderer (virtualDom) {
  let attributeString = " "
  if(virtualDom.props) {
    const keys = Object.keys(virtualDom.props)
    for(var i in keys) {
      const key = keys[i]
      const value = virtualDom.props[key]
      attributeString += `${key}="${value}" `
    }
  }

  let content = ""
  for(var i in virtualDom.children) {
    const child = virtualDom.children[i]

    if(typeof child === 'object') {
      content += renderer(child)
    } else {
      content += child
    }
  }

  return `<${virtualDom.type}${attributeString.trimRight()}>${content}</${virtualDom.type}>`
}
