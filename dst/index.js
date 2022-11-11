//e: DOM element
//k: key
//v: value
//i: iterating variable
//w: width pixels
//h: height pixels
//x: X co-ordinate (ambiguous)
//y: Y co-ordinate (ambiguous)



const props = {
    NS_SVG:"http://www.w3.org/2000/svg",

    svg:{
        width:"1000",
        height: "1000",
    },
    grid:{
        class: "grid"
    },
    square:{
        xOffset: 50,
        yOffset:  50,
        w: 50,
        h: 50,
        class: "square"
    }

}
const setTags = (e, tags) => {
    console.log(tags)
    for(const [k,v] of Object.entries(tags)){
        console.log(k)
        console.log(v)
        e.setAttribute(k, v);
    }
}

const createElement = (parent, eType = "div", tags = {}, namespace = "default") => {
    
    let e = (namespace == "default")?
        document.createElement(eType):
        document.createElementNS(namespace,eType)
    parent.append(e)
    setTags(e, tags)
    return e
}

const nodeHTML = document.body
const nodeSVG = createElement(nodeHTML,"svg", props.svg, props.NS_SVG)
const nodeGrid = createElement(nodeSVG,"g", props.grid, props.NS_SVG)



const squares = []
for(let xi = 0; xi<9; xi++){
for(let yi = 0; yi<9; yi++){
    let sqaure = {
        x:xi * props.square.w + props.square.xOffset,
        y:yi * props.square.h + props.square.yOffset,
        class: props.square.class
    }
    createElement(nodeGrid,"rect",sqaure, props.NS_SVG)
}}
