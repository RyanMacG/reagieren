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

  return `<${virtualDom.type}${attributeString.trimRight()}></${virtualDom.type}>`
}
