let numOne    = document.getElementById("num__one").innerText; 
let operator  = document.getElementById("operator").innerText;   
let numTwo    = document.getElementById("num__two").innerText;

let areaResultOne = document.getElementById("area__one");     
let areaResultTwo = document.getElementById("area__two");     
let areaResultThree = document.getElementById("area__three");     
let areaResultFour = document.getElementById("area__four"); 

const answersBtn = document.querySelectorAll(".btnOne");

const resultIcons = document.querySelectorAll(".result");

let mainResult = (numOne * 1) + (numTwo * 1);

const randNum = (limit) => {
    return Math.floor(Math.random() * limit);
};

const mixNumbers = (mainResult) => {
    let arr = [mainResult];
    for ( let i = 0; i < 3; i++) {
        arr.push(randNum(mainResult));
    }
    
    let randomAnswers =  arr.sort(() => Math.random() - 0.5 );
    
    areaResultOne.innerText = randomAnswers[0];
    areaResultTwo.innerText = randomAnswers[1];
    areaResultThree.innerText = randomAnswers[2];
    areaResultFour.innerText = randomAnswers[3];
    
};

mixNumbers(mainResult);

const checkCorrectNum = (e) => {
    
    if ( e.currentTarget.innerText == mainResult ) {
       for ( let i = 0; i < resultIcons.length; i++ ) {
           resultIcons[0].classList.add("correct")
       }

    }
    else {
        for ( let i = 0; i < resultIcons.length; i++ ) {
            resultIcons[0].classList.add("wrong")
        }
    }
    
    
}

answersBtn.forEach(btn => {
    btn.addEventListener("click", checkCorrectNum);
});

