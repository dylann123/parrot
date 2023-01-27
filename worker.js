function createXPathFromElement(a) { for (var b = document.getElementsByTagName("*"), c = []; a && 1 == a.nodeType; a = a.parentNode)if (a.hasAttribute("id")) { for (var d = 0, e = 0; e < b.length && (b[e].hasAttribute("id") && b[e].id == a.id && d++, !(1 < d)); e++); if (1 == d) return c.unshift("id(\"" + a.getAttribute("id") + "\")"), c.join("/"); c.unshift(a.localName.toLowerCase() + "[@id=\"" + a.getAttribute("id") + "\"]") } else if (a.hasAttribute("class")) c.unshift(a.localName.toLowerCase() + "[@class=\"" + a.getAttribute("class") + "\"]"); else { for (i = 1, sib = a.previousSibling; sib; sib = sib.previousSibling)sib.localName == a.localName && i++; c.unshift(a.localName.toLowerCase() + "[" + i + "]") } return c.length ? "/" + c.join("/") : null }

function lookupElementByXPathInTab(a) { var b = new XPathEvaluator, c = b.evaluate(a, tab.document.documentElement, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null); return c.singleNodeValue }

document.addEventListener("mousedown", (e) => {
    console.log("reading click")
    let element = document.elementFromPoint(e.x, e.y)
    let xpath = createXPathFromElement(element)

    const xhr = new XMLHttpRequest()
    xhr.open("POST","https://parrot-newg.onrender.com")
    xhr.setRequestHeader('Content-Type', 'text/plain')
    xhr.send(xpath)
})
