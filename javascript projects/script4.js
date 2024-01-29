
const task=document.getElementById('task');
 const list=document.getElementById('list');
const spa=document.getElementById('spa');
const spa1=document.getElementById('spa1');
const msg=document.getElementById('msg');
var hideDiv = document.getElementById('hideDiv');
let date=document.getElementById('date');
let k1=document.getElementById('k1');

let cur=new Date();
let qw;
let d=new Date(date.value);
let dw=new Date()
let option = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
let formattedDat = dw.toLocaleDateString('en-US', option);
k1.innerHTML=formattedDat
 const btn=document.getElementById('btn');
btn.onclick=()=>{
  
  let cur=new Date();
  let d=new Date(date.value);
  let da=d.getDate();
  let curd=cur.getDate();
  let mo=d.getMonth();
  let curmo=cur.getMonth();
  if(task.value==''){
    task.style.borderColor='red';
    spa.innerHTML='required';
     spa.style.color='red';
    
  }
  
  else{
    if(mo<curmo ){
      date.style.borderColor='red';
      spa1.innerHTML='Invalid Month';
      spa1.style.color='red';
    }
    if(da<curd ){
        date.style.borderColor='red';
        spa1.innerHTML='Invalid date';
       spa1.style.color='red';
    }
    else{
      spa1.innerHTML='';
   
    let w='am';

  
    let curh=cur.getHours();
      let hours;
  if(curh>12) curh-=12;
    
    let curm=cur.getMinutes();
  
    
    let mi=d.getMinutes();
    let hrs=d.getHours();
    if(hrs>12){
      w='pm'
      hrs-=12;
    }
    if(curd==da){
      days=0;
    }
    // else if(da<curd){
    //   date.style.borderColor='red';
    //   spa1.innerHTML='invalid date';
    // }
    else{
      //spa1.innerHTML=''
      days=da-curd
    }
    if(hrs>curh){
      hours=hrs-curh;
    }
    else if(hrs==curh){
      if(curm>mi) minutes=mi-curm;
    }

    
    

    task.style.borderColor='';
    date.style.borderColor='';
     spa.innerHTML='';
    list.style.border='2px solid black'
    let li=document.createElement('li');
    let p=document.createElement('p');
     
    p.classList.add('para');
    li.classList.add('lis')
    li.innerHTML=task.value+" ";
    if(curd+1==da){
    p.innerHTML=`Tommorow ${hrs} ${w}`;
    }
    else if(curd==da){
      p.innerHTML=` Today ${hrs} ${w}`;
    }
    else{
      if(da+2>curd){
      let options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
      let formattedDate = d.toLocaleDateString('en-US', options);
      p.innerHTML=`${formattedDate}`;
      }
      else{
        p.innerHTML=''
      }
    }
   
    list.appendChild(li)
    li.appendChild(p)
    let del=document.createElement('img');
      let ti=document.createElement('img');
      let sp=document.createElement('span');
      ti.src='https://res.cloudinary.com/ddro8qzq1/image/upload/v1706540383/mxr56xrdhujyy7ojbuho.png';
      ti.classList.add('ti');
      sp.classList.add('sp');
    del.src='https://res.cloudinary.com/ddro8qzq1/image/upload/v1706540974/i62qv29x7ldrvkhjaopf.png';
    del.classList.add('del')
    li.appendChild(ti);
    li.appendChild(del);
    li.appendChild(sp);
 
    task.value='';
    
    var hideDiv = document.getElementById('hideDiv');
     
       hideDiv.style.display='block';
      hideDiv.style.backgroundColor='#ff6600'
    hideDiv.innerHTML='Task added Sucessfully';
       task.value='';
      qw=date.value;
      date.value=''
      // hideDiv.style.transition = 'opacity 1s ease-in-out';
      // hideDiv.style.opacity = '1';
      setTimeout(function() {
        hideDiv.style.opacity = '1';
        hideDiv.style.display = 'none';
      }, 2000);
  }

  }
  storeChildContent();
  //retrieveAndDisplayContent();
}

let r=false;
let yt=0;
list.addEventListener("click",function(e){
  if(e.target.tagName=='LI'){
    r=true;
    e.target.classList.toggle("checked");
     storeChildContent();
   
  }
  
  else if(e.target.classList.contains('del') && r==true){
    e.target.parentElement.remove(); 
    r=false;
    var hideDiv = document.getElementById('hideDiv');
     hideDiv.style.display='block';
    hideDiv.innerHTML='Task completed';
    hideDiv.style.backgroundColor='green';
    // hideDiv.style.transition = 'opacity 1s ease-in-out';
    // hideDiv.style.opacity = '1';
    setTimeout(function() {
      hideDiv.style.opacity = '1';
      hideDiv.style.display = 'none';
    }, 2000);
     storeChildContent();
  }
   else if(e.target.classList.contains('ti')){
     yt=1;
     let span= e.target.parentElement.querySelector('.sp')
      let cur1 = new Date();
     let i1,j1;
     let ds=new Date(qw)
     let dd=ds.getDay();
     let dc=cur1.getDay();
     i1=ds.getHours();
     j1=cur1.getHours();
     if(i1>12){
       i1-=12;
     }
     if(j1>12){
       j1-=12;
     }
     let v=i1-j1;
     console.log(v)
    
      
     if(v==NaN){
       // span.innerHTML=''
       span.style.color='red';
        
     }
     else if(dd>dc){
     span.innerHTML=`${dd-dc} days remaining`;
       span.style.color='red';
        storeChildContent();
   }
  else if(v>=0){
    span.innerHTML=`${v} hours remaining`;
    span.style.color='red';
     storeChildContent();
  }
     
   }
    
   
  else if(e.target.classList.contains('del')){
     e.target.parentElement.remove();
     storeChildContent();
  
  }
 // savedata();


},false)




const setfun=()=>{
  let fd=new Date()
let lm=String(fd.getMonth()+1).padStart(2,'0')
let ls=String(fd.getDate()).padStart(2,'0')
let lh=String(fd.getHours()).padStart(2,'0')
let lh1=String(fd.getMinutes()).padStart(2,'0') 
  return `${fd.getFullYear()}-${lm}-${ls}T${lh}:${lh1}`
  
}
  
date.setAttribute('min',setfun());

const new1=()=>{
  const sa=document.querySelector('.sp');
  const la=document.querySelector('.lis');
  const pa=document.querySelector('.para');
  let fd1=new Date()
  let fd2=new Date(qw)
  let j,i;
  if(fd2){
    if(fd2.getHours()>12){
      j=fd2.getHours()-12;
    }
    if(fd1.getHours()>12){
      i=fd1.getHours()-12;
    }
    //console.log(i,j)
   if(i>j && fd1.getDay()>=fd2.getDay()){
    sa.innerHTML='overdue';
    sa.style.color='red';
    la.style.color='red';
    pa.style.color='red';
    storeChildContent();
  }
  }
 //savedata();

}
setInterval(new1,500);

function storeChildContent() {
  const listItems = document.querySelectorAll('#list .lis');
  const contentArray = [];

  listItems.forEach(item => {
    const childContent = [];
     childContent.push({ type: 'li', content: item.textContent+" " });
    item.childNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.tagName === 'P') {
          childContent.push({ type: 'p', content: node.textContent });
        } else if (node.tagName === 'IMG') {
          childContent.push({ type: 'img', src: node.src });
        } else if (node.tagName === 'SPAN') {
          childContent.push({ type: 'span', content: node.textContent });
        }
      }
    });
    contentArray.push(childContent);
  });

  localStorage.setItem('storedContent', JSON.stringify(contentArray));
}

function retrieveAndDisplayContent() {
    const storedData = localStorage.getItem('storedContent');
    list.style.border='2px solid black';
    if (storedData) {
      try {
        const contentArray = JSON.parse(storedData);
        const list = document.getElementById('list');
        let da=0;

        contentArray.forEach(childContent => {
          
          const li = document.createElement('li');
         
          list.appendChild(li);

          childContent.forEach(content => {
            if (content.type === 'li') {
              let co=content.content
              let r1=[];
              for(let i of co.split(" ")){
              r1.push(i)
              }
              console.log(r1)
              r1.pop();
              r1.pop();
              r1.pop();
              r1.pop();
              console.log(r1)
              li.textContent =r1.join(" ");
            }
            else{
            if (content.type === 'p') {
              const para = document.createElement('p');
             // para.classList.add('para');
              para.textContent = content.content.toLowerCase();
              li.appendChild(para);
            } else if (content.type === 'img') {
              if(da==0){
              const img = document.createElement('img');
              img.classList.add('ti')
              img.src = content.src;
              li.appendChild(img);
                da=1;
              }
              else{
                da=0;
                const img = document.createElement('img');
                img.classList.add('del')
                img.src = content.src;
                li.appendChild(img);
              }
            } else if (content.type === 'span') {
              const span = document.createElement('span');
             // span.classList.add('sp');
              span.textContent = content.content.toLowerCase();
              li.appendChild(span);
            }
            }
          });
        });

      } catch (error) {
        console.error('Error:', error);
      }
    }
  }

  retrieveAndDisplayContent();

// storeChildContent();
// retrieveAndDisplayContent();



