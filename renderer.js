export default function renderer (virtualDom) {
  if(Array.isArray(virtualDom)) {
    return renderArrayOfVirtualDomElements(virtualDom)
  }

  if(isComponent(virtualDom.type)) {
    return renderer(virtualDom.type({children: virtualDom.children}))
  }

  let children = renderArrayOfVirtualDomElements(virtualDom.children)

  return renderDomTag(virtualDom.type, virtualDom.props, children)
}

function isComponent(type) {
  return typeof type === "function"
}

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

function renderDomTag(type, props, children) {
  return `<${type}${renderDomTagAttributes(props)}>${children}</${type}>`
}

function renderDomTagAttributes(props) {
  let attributeString = " "
  if(props) {
    const keys = Object.keys(props)
    for(var i in keys) {
      const key = keys[i]
      const value = props[key]
      attributeString += `${key}="${value}" `
    }
  }
  return attributeString.trimRight()
}
