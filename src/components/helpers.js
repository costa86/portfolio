export function appendChildren(element, ...children) {
    for (let i of children) {
        element.appendChild(i);
    }
}