var score = 0
var x = [220, 420]
var y = [100, 80]
const width = [110, 115]
const height = [110, 115]

document.getElementById("left").onclick = () => {
    x[0] -= 5
  }
  
  document.getElementById("right").onclick = () => {
    x[0] += 5
  }
  
  document.getElementById("up").onclick = () => {
    y[0] -= 5
  }
  
  document.getElementById("down").onclick = () => {
    y[0] += 5
  }

function UpdateGameArea() {
   document.getElementsByTagName("img")[0].style.width = width[0] + "px"
   document.getElementsByTagName("img")[0].style.height = height[0] + "px"
   document.getElementsByTagName("img")[1].style.width = width[1] + "px"
   document.getElementsByTagName("img")[1].style.height = height[1] + "px"
   document.getElementsByTagName("img")[0].style.left = x[0] + "px"
   document.getElementsByTagName("img")[0].style.top = y[0] + "px"
   document.getElementsByTagName("img")[1].style.left = x[1] + "px"
   document.getElementsByTagName("img")[1].style.top = y[1] + "px"
   document.getElementsByTagName("img")[0].style.position = "absolute"
   document.getElementsByTagName("img")[1].style.position = "absolute"
}

setInterval(UpdateGameArea, 100)