const myButton = document.querySelector(".button");
const myForm = document.querySelector(".container");
const thanks = document.querySelector("#thank_you")
const Sub = document.querySelector("#submit")

myButton.addEventListener("click", addform)
Sub.addEventListener("click", submitt)
thanks.addEventListener("click", thanks)

function addform() {
myForm.style.display = "block";
thanks.style.display="none";
}
// Show thank you message element
function submitt(){
    myForm.style.display = "none";
thanks.style.display="block"}
    
   