let clrButton=document.getElementById("colorBtn")
console.log(clrButton)
const mnElement=document.getElementById("mainElem")
const txtElement=document.getElementById("textBtn")
const imgElement=document.getElementById("imgBtn")

clrButton.addEventListener("click",()=>{
    let red = Math.random()*255
    let green= Math.random()*255
    let blue= Math.random()*255
    console.log(red,green,blue)
    mnElement.style.backgroundColor="rgb("+red+", "+green+", "+blue+")"
})
 
 const addSomeText=()=>{
    let htmlElem = document.createElement("h3")
    let someText="This is a string of Text!"
    htmlElem.innerText=someText

    mnElement.appendChild(htmlElem)

 }


 txtElement.addEventListener("click",addSomeText)

const addAnImage =()=>{
      let imgElem =document.createElement("img")
      imgElem.src="https://64.media.tumblr.com/8001363db2e4d6c8bf292ff0da858ae1/ee71805accc56c2f-9a/s2048x3072/f61fbdd5e12d6c1a2adc82eb710ed8f046853f61.jpg"
      imgElem.alt="flower"

      mnElement.appendChild(imgElem)
      imgElem.classList.add("my-class")
    }

 imgElement.addEventListener("click",addAnImage)