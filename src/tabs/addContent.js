export function addContent(parent, node, content = null,  src = null, href = null, id = null){
    let element = document.createElement(node);
    if (content !== null) {
        element.textContent = content;
    }

    if (src !== null) {
        element.src = src;
    }

    if (href !== null) {
        element.href = href;
    }

    if (id !== null) {
        element.id = id;
    }

    parent.appendChild(element);
}