
const appendNewElement = (parent, childName) => 
    {return parent.appendChild(document.createElement(childName));}

// return nothing, this just modifies document state
// direction: left or right
// I could keep this symlinked to my website repo but that sounds like a horrible idea

export function createHeader(direction){
    let bodyNode = document.querySelector("body");
    if(direction !== "left" && direction !== "right") {return;}

    let pifHeader;
    if(direction === "right"){
        pifHeader = appendNewElement(bodyNode, "header");
    }
    else {
        
        pifHeader = bodyNode.insertBefore(document.createElement("header"), bodyNode.children[0])
    }
    pifHeader.setAttribute("class", "pifheader" + direction)
    headerElem(pifHeader, "https://ant-28.github.io/index.html", "[: Home :]")
    headerElem(pifHeader, "https://ant-28.github.io/about.html", "[: About :]")
    headerElem(pifHeader, "https://ant-28.github.io/blog", "[: Blog :]")
    headerElem(pifHeader, "https://ant-28.github.io/faq.html", "[: FAQ :]")
    headerElem(pifHeader, "https://ant-28.github.io/contact.html", "[: Contact :]")
    
}

// create left header
export const createHeaderLeft = () => createHeader("left");
// create right header
export const createHeaderRight = () => createHeader("right");

// parentNode: Node -> URL: String -> textContent: String -> Node
export function headerElem(parentNode, uri, textContent){
    // we want an a element
    let newanchor = appendNewElement(parentNode, "a");
    newanchor.setAttribute("href", uri);
    newanchor.textContent = textContent;
    return newanchor;
}


export function resizeObserver(elementNode){
    // when the window resizes and the text overflows
    // the main overflowing content is the body

    let bodyNode = document.querySelector("body");
    // make the body as big as the element node
    bodyNode.style.height = `${elementNode.scrollHeight}px`; 
}
