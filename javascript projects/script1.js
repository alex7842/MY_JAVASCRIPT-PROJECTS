let su=0

const fun=()=>{

  let a=document.getElementById('size')
  let b=document.getElementById('color')
  let c=document.getElementById('back')
  let d=document.getElementById('radius')
  let e=document.getElementById('width')
  let f=document.getElementById('height')
  let bt=document.getElementById('btn')
  let bor1=document.getElementById('bor')
  let tex=document.getElementById('tex1')
  
  const w=Number(e.value)

  const h=Number(f.value)
  const br=Number(d.value)
  const fs=Number(a.value)
 bt.style.color=b.value
bt.style.backgroundColor=c.value
  bt.style.borderRadius=`${br}px`
  bt.style.fontSize=`${fs}px`
  bt.style.width=`${w}px`
  bt.style.borderColor=bor1.value
  bt.style.height=`${h}px`
  bt.innerText=`${tex.value}`
  su+=1;

}

const s=document.getElementById('btn')
 s.onclick=()=>{
if(su>0){
  alert('Your Button looks Nice')
}
   else{
     alert('Start Creating Your Button')
   }
 }

let previousClass = '';
const sur=()=>{
  let b1 = ['btn11', 'btn22', 'btn33'];
  let b2 = Math.floor(Math.random() * b1.length);
  const selectedButtonClass = b1[b2];
  const target = document.getElementById('bt11');
  
    if (previousClass) {
      target.classList.remove(previousClass);
    }

    target.classList.add(selectedButtonClass);
    previousClass = selectedButtonClass;
  

}

const w=document.getElementById('btn1')

w.onclick=(event)=>{
  event.preventDefault()
  let ws=document.getElementById('dnone');
  ws.style.display='block'
  
  sur()
}
