const question=[
  {
    question:"Who is the father of C language?",
    answers:[
      {text:"Steve Jobs",correct:false},
      {text:"James Gosling",correct:false},
      {text:"Dennis Ritchie",correct:true},
      {text:" Rasmus Lerdorf",correct:false},
    ]
  },
  {
    question:"What is the sizeof(char) in a 32-bit C compiler?",
      answers:[
        {text:"1 byte",correct:true},
        {text:"2 bits",correct:false},
        {text:"1 bits",correct:false},
        {text:"2 Bytes",correct:false},
      ]
    },
  {
    question:"The #include <stdio.h> is a ______________.",
      answers:[
        {text:"Preprocessor directive",correct:true},
        {text:"Inclusion directive",correct:false},
        {text:"File inclusion directive",correct:false},
        {text:"None of the above",correct:false},
      ]
    },
  {
    question:"Which is the correct format specifier for integer type value in C?",
      answers:[
        {text:"%f",correct:false},
        {text:"%d",correct:true},
        {text:"%lf",correct:false},
        {text:"%ld",correct:false},
      ]
    }
];
const quest=document.getElementById('quest')
const answer=document.getElementById('answer')
const nextbtn=document.getElementById('next-btn')
let curin=0;
let score=0;

const start=()=>{
   curin=0;
   score=0;
  nextbtn.innerHTML='Next';
  show();
}
function show(){
  reset()
  let curquest=question[curin];
  let questno=curin+1;
  quest.innerHTML=`${questno} .${curquest.question}`;
 
   curquest.answers.forEach(i =>{
    const bt=document.createElement('button');
    
    bt.innerHTML=i.text;
    bt.classList.add('btn');
    answer.appendChild(bt);
     if(i.correct){
       bt.dataset.correct=i.correct;
     }
     bt.addEventListener("click",select);
    
  })
}
const reset=()=>{
  nextbtn.style.display='none';
  while(answer.firstChild){
    answer.removeChild(answer.firstChild);
  }
}

function select(e){
  const selectedbtn=e.target;
  const isc=selectedbtn.dataset.correct==="true";
  if(isc){
    selectedbtn.classList.add("correct");
    score++;
  }
  else{
    selectedbtn.classList.add("incorrect");
  }
  Array.from(answer.children).forEach(i=>{
    if(i.dataset.correct==="true"){
    i.classList.add("correct");
    }
    i.disabled=true;
  })
  nextbtn.style.display="block";
  
}
function showscore(){
  reset();
  if(score===question.length){
    const jsConfetti = new JSConfetti();

    // button.addEventListener('click', () => {
        jsConfetti.addConfetti({
            emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
          confettiRadius: 6,
          emojiSize: 50,
          confettiNumber: 120,
        }).then(() => jsConfetti.addConfetti())
    // })
    Swal.fire({
      title: "Good job!",
      width: 300,
      height:200,
      text: `Your score is ${score} / ${question.length}`,
      icon: "success"
    });
     quest.innerHTML=`your score is ${score} / ${question.length}`;
    nextbtn.innerHTML="play again";
    nextbtn.style.display="block";
  }
  else{
  quest.innerHTML=`your score is ${score} / ${question.length}`;
  nextbtn.innerHTML="play again";
  nextbtn.style.display="block";
  }
}
function handlenext(){
  curin++;
  if(curin<question.length){
    show();
  }
  else{
    showscore();
  }
}

nextbtn.addEventListener("click",()=>{
  if(curin<question.length){
    handlenext();
  }
  else{
    start();
  }
});

start();