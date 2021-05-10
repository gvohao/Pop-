let balloon = document.getElementById("button");
let count = 0
let level = 1
let state = {
    level : 1,
    maxClick: Math.floor(Math.random() * 20) + 1, //1pt - for 5% risk
    //rules here
    // level : 2,
    // maxClick: Math.floor(Math.random() * 14) + 1, // 1.5pt - 7.1% risk (50% reward, +30% more risk)
    // level : 3,
    // maxClick: Math.floor(Math.random() * 12) + 1, // 2pt - 8.3% risk (33% reward, +16% risk)
}

console.log(state)
let maxClick = 0
// let maxClick = Math.floor(Math.random() * 20) + 1
balloon.addEventListener("click", function(e){

    if(count < state.maxClick){
        e.target.style.height = (e.target.offsetHeight + 1) + "px";
        e.target.style.width = (e.target.offsetWidth + 1) + "px";
    }else{
        alert("bubble burst") // needs to replace w animation
    }
    count++

})

// balloon.addEventListener("click", function(e){
//     if(level === 1){
//         #points += 1
//     }
// })
document.querySelector('#nextLevel').addEventListener('click', function(e){

    if(state.level < 5){
        state.level += 1}
    document.querySelector("#level").textContent = state.level
    count = 0
    if(state.level === 2){
        state.maxClick = Math.floor(Math.random() * (state.maxClick + 14)) + 1
    }else if(state.level === 3){
        state.maxClick = Math.floor(Math.random() * (state.maxClick + 12)) + 1
    }else if(state.level === 4){
        state.maxClick = Math.floor(Math.random() * (state.maxClick + 10)) + 1
    }else if(state.level === 5){
        state.maxClick === 3
        // state.maxClick = Math.floor(Math.random() * (state.maxClick + 8)) + 1
    }else if(state.level > 4){
        state.level = 4
    } // consider soing without levels and doing 1 balloon on each level that has
    // higher prob of bursting as it grows bigger
    // state.maxClick = Math.floor(Math.random() * (state.maxClick[i] + 5)) + 1
    //create array for maxClick
})

let score = {
    points : 0,
}

document.querySelector('#button').addEventListener('click', function(e){
    if(state.level === 1){
    score.points += 1
    }else if(state.level === 2){
        score.points += 1.5
    }else if(state.level === 3){
        score.points += 2
    }else if(state.level === 4){
        score.points += 2.5
    }else if(state.level ===5){
        score.points += 3}

    document.querySelector("#points").textContent = score.points
    // count = 0
    // state.maxClick = Math.floor(Math.random() * (state.maxClick + 5)) + 1
    // state.maxClick = Math.floor(Math.random() * (state.maxClick[i] + 5)) + 1
    //create array for maxClick
})

