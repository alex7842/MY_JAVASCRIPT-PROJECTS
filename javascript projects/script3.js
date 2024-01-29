const para=document.getElementById('para')
const btn=document.getElementById('btn')
const aut=document.getElementById('aut')

async function quote(url){
 
  const res= await fetch(url)
  var data =await res.json()
  para.innerText=data.content
  aut.innerText=data.author
  console.log(data)
  
}
function myFunction(x) {
  x.classList.toggle("fa-regular");
  x.classList.toggle("fa-solid");
}

btn.onclick=()=>{
   const url='https://api.quotable.io/random'
  quote(url)
}