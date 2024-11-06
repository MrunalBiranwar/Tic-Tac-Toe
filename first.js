let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset-btn");
let turnO = true;


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
const enablebtn = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disablebtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        winnercheck()
    })
})
const winnercheck = () =>{
   for(let pattern of winPatterns){
        let playVal1 = boxes[pattern[0]].innerText
        let playVal2 = boxes[pattern[1]].innerText
        let playVal3 = boxes[pattern[2]].innerText
        
        if(playVal1 != "" && playVal2 != "" && playVal3 != ""){
            if(playVal1 === playVal2 && playVal2 === playVal3){
                console.log("Winner!!")
                disablebtn();
                console.log("Winner "+playVal1)
            }
        }
   }
};
reset_btn.addEventListener("click", enablebtn);