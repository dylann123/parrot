let cache = "";

setInterval(() => {
    function lookupElementByXPathInTab(a) { var b = new XPathEvaluator, c = b.evaluate(a, document.documentElement, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null); return c.singleNodeValue }
    fetch("https://parrot-newg.onrender.com")
        .then(res => res.text())
        .then(data => {
            let element = lookupElementByXPathInTab(data)
            if (data != cache) {
                cache = data
                element.scrollIntoView()
                element.click()
            }
        })
}, 500);
