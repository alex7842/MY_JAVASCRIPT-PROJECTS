
const g=document.querySelectorAll('.btn1')
const c=document.getElementById('para')
const t={'red':0,'blue':0,'green':0,'yellow':0}

g.forEach(i=>{
  i.onclick=()=>{
    t[i.value]+=1

    c.innerHTML=`You clicked <span style="color: ${i.value}">${i.value}</span> ${t[i.value]} times`
    i.innerHTML=`<span style="font-weight:bold; font-size:2rem">${t[i.value]}</span>`

  }
})
const clear=() =>{
  g.forEach(i=>{
    if(t[i.value]>0){
    i.innerHTML=0
      t[i.value]=0
       c.innerHTML = `You clicked <span style="color: ${i.value}">${i.value}</span> ${t[i.value]} times`
    }
    else{

      i.innerHTML=" "

    }

  })

}

const k=document.getElementById('but')
k.onclick=()=>clear()




