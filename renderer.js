export default function renderer (virtualDom, stateCreator) {
  if(Array.isArray(virtualDom)) {
    return renderArrayOfVirtualDomElements(virtualDom, stateCreator)
  }

  if(isComponent(virtualDom.type)) {
    const props = {children: virtualDom.children, ...virtualDom.props}

    if(virtualDom.state == undefined) {
      virtualDom.state = stateCreator.newState()
    }
    return renderer(virtualDom.type(props, virtualDom.state), stateCreator)
  }

  let children = renderArrayOfVirtualDomElements(virtualDom.children, stateCreator)

  return renderDomTag(virtualDom.type, virtualDom.props, children)
}

function isComponent(type) {
  return typeof type === "function"
}

function renderArrayOfVirtualDomElements(array, stateCreator) {
  let elements = ""
  for(var i in array) {
    const innerElement = array[i]
    if(typeof innerElement === 'object') {
      elements += renderer(innerElement, stateCreator)
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
