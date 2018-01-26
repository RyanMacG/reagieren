function renderArrayOfVirtualDomElements(array) {
    let elements = ""
    for(var i in array) {
      const innerElement = array[i]
      if(typeof innerElement === 'object') {
        elements += renderer(innerElement)
      } else {
        elements += innerElement
      }
    }
    return elements
}

export default function renderer (virtualDom) {
  if(Array.isArray(virtualDom)) {
    return renderArrayOfVirtualDomElements(virtualDom)
  }

  if(typeof virtualDom.type === "function") {
    return renderer(virtualDom.type({children: virtualDom.children}))
  }

  let attributeString = " "
  if(virtualDom.props) {
    const keys = Object.keys(virtualDom.props)
    for(var i in keys) {
      const key = keys[i]
      const value = virtualDom.props[key]
      attributeString += `${key}="${value}" `
    }
  }

  let content = renderArrayOfVirtualDomElements(virtualDom.children)

  return `<${virtualDom.type}${attributeString.trimRight()}>${content}</${virtualDom.type}>`
}
