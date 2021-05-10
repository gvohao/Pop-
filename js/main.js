// let balloon = document.getElementsByClassName('balloon')

// balloon

// console.log(document)
// balloon.addEventListener('click', function(e){
//     ;
// })


function grow(){
    button += 10px;
}

// let balloon = document.querySelector('.balloon');
// let button =document.querySelector('.text');
//
// div.style.display = 'none';
//
// button.onclick = () => {
//   div.style.display ="block";
// }
//
// // size variable
// button.addEventListener("click", function(event){
//   balloon += 10;
//   let propertyValues = "height: " + size + "px; width: " + size + "px;"
//
//   // button.setAttribute("style", propertyValues);
//   button.style = propertyValues;
// });

//
// // button.addEventListener("click", function(event){
// //   // get existing values
// //   let existingHeight = window.getComputedStyle(button).getPropertyValue("height");
// //   let existingWidth = window.getComputedStyle(button).getPropertyValue("width");
// //
// //   // remove 'px' and convert to a number
// //   existingHeightNumber = parseInt(existingHeight, 10);
// //   existingWidthNumber = parseInt(existingWidth, 10);
// //
// //   newHeight = existingHeightNumber + 10;
// //   newWidth = existingWidthNumber + 10;
// //
// //   button.style.height = newHeight.toString() + "px";
// //   button.style.width = newWidth.toString() + "px";
// //
//   // let propertyValues = "height: " + newHeight.toString() + "px; width: " + newWidth.toString() + "px;"
//   // button.style.cssText = propertyValues;
// // });
const myDiv = document.getElementById('myDiv'); // get the element

function grow() { // add grow to class list
    myDiv.classList.add("grow");
}

// add fade-in and remove it after 2 seconds
// 2 sseconds are the seconds of fade-it to get completed.
function fade() {
    myDiv.classList.add("fade-in");
    setTimeout(function(){myDiv.classList.remove("fade-in");}, 2000);
}

function blue() {
    myDiv.classList.add("blue");
}

function reset() { // reset the class list
    myDiv.classList = [];
}
