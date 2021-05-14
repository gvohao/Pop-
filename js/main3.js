let count = 0
let level = 1
let points = 0
let scale = 1
let maxClick = [13, 23, 25, 18, 18, 25, 13, 15, 20, 14, 18, 15, 25, 13, 15, 23, 18, 20, 13, 23, 11, 25, 13, 15, 20, 11, 25, 13, 15, 20 ];

//dont display game area
document.querySelector('#startGame').style.display = 'none'

let sound = document.getElementById("sound");
sound.volume = 0.07;
//reset game
function startGame(){
    document.querySelector("#startPage").style.display = "none"
    document.querySelector('#startGame').style.display = 'block'
    sound.play()
}

document.querySelector("#pressStart").addEventListener('click', startGame)

let balloon = document.getElementById("balloon")
let lose = document.getElementById("lose")

let haha = document.getElementById("haha");
sound.volume = 0.12;

balloon.addEventListener("click", function (e) {
    //balloon size increment
    if(count < maxClick[level - 1]){
        scale += 0.05;
        e.target.style.transform = "scale("+scale+")"
    }else{
        // needs to replace w smoke animation
        //create function for balloon burst, once burst points = 0, balloon
        //reset size, game carries on with next balloon
        balloon.classList.add("explode")
        lose.classList.add("visible")
        haha.play()
        lose.addEventListener('click', () => {
            lose.classList.remove("visible")
            balloon.classList.remove("explode")
        })

    }
    count++

    //point increment
    if(count < maxClick[level - 1]){
        points += 1
    }
    //reset points to 0 after explode
    if(count > maxClick[level -1]){
        points = 0
    }
    //find a way for the points to stop increasing once burst

    document.querySelector("#points").textContent = points
})

    //level increment
let coins = document.getElementById("coins");
sound.volume = 0.1;
let arr = []
document.querySelector('#collect').addEventListener('click', function(e){
    scale=1

    if(level < 30){
        level += 1
        balloon.style.width = "240px";
        balloon.style.height ="126.67";
        coins.play()
        haha.pause()
    }else if(level < 30){
        level = 30
        balloon.style.width = "240px";
        balloon.style.height ="126.67";
    }

    count = 0
    document.querySelector("#level").textContent = level

    if(points >= 1){
        arr.push(points);
        let sum = arr.reduce(function(a,b){
            return a + b;

        })
        document.getElementById("walletAmount").innerText = sum
        points = 0
        document.querySelector("#points").textContent = points

        if(level >= 30){
            alert(points);
        }
    }

})


