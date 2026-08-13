const root=document.getElementById("root");
const react_element={
    type:"a",
    prop:{
        href:"https://www.google.com",
        target:"_blank"
    },
    children:"Click me to visit Google"
}
function custorender(append_one,react_element){
    const dom_element=document.createElement(react_element.type);
    for(let prop in react_element.prop){
        dom_element.setAttribute(prop, react_element.prop[prop]);
    }
    dom_element.innerHTML=react_element.children;
    append_one.appendChild(dom_element);
}
custorender(root, react_element);