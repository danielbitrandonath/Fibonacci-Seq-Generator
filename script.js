
let genBttn = document.querySelector("#gen");
let clrBttn = document.querySelector("#clr");
let  result = document.querySelector("h2");

clrBttn.onclick = function clear(){
    
    result.innerHTML = "Sequence:" + " "; 
    document.getElementById("input").value = " "; 
}


genBttn.onclick = function fibonacci(){
    
    let myInput = document.getElementById("input").value;
    let n = myInput
    let fSeq = [0]
    let a = 0
    
    for (let fib = 1; fSeq.length < n; a++){  

            fSeq.push(fib);
            let pos1 = fSeq[a]
            let pos2 = fSeq[a+1]   
            fib = pos1 + pos2;  
        }
    result.innerHTML += " " + fSeq.join(" ");
}





