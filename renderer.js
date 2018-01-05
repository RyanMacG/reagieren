export default function (virtualDom) {
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
  if(virtualDom.children) {
    content = virtualDom.children[0]
  }

  return `<${virtualDom.type}${attributeString.trimRight()}>${content}</${virtualDom.type}>`
}
