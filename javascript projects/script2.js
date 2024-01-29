let a=document.getElementById('input')
let id1=document.getElementById('id1')
let id2=document.getElementById('id2')
let id3=document.getElementById('id3')
let id4=document.getElementById('id4')
let id5=document.getElementById('id5')
let div=document.getElementById('weather')
const c=document.getElementById('card')
const lab=document.getElementById('label')
const alex=document.getElementById('alex')
const key='3b704ac692f9cedf38b420eee4e5cf71'
const url='https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const create=(imgSrc)=>{
  const img = document.createElement('img');
  img.src = imgSrc;
  img.classList.add('weather-icon');
  img.style.width = '80px';
  img.style.maxHeight = '65px';
  img.style.marginBottom='3px';
  img.style.borderRadius='70%';
  img.style.marginLeft= '70px';
  //div.insertAdjacentElement('afterend', img);
  div.appendChild(img);
}
async function weather(){
  const k=url+a.value
  const res=await fetch(k+`&appid=${key}`)
  var data=await res.json()
  console.log(data)
  try{
    alex.innerHTML=''
    a.style.borderColor = 'black'
  let weatherDescription =data.weather[0].description


  if (weatherDescription === "clear sky" || weatherDescription === "few clouds" || weatherDescription === "scattered clouds" || weatherDescription === "broken clouds" || weatherDescription === "overcast clouds") {
      const imgSrc = 'https://media.tenor.com/3GgX9XG4fe0AAAAM/blue-fly.gif'
         create(imgSrc);
   
  } else if (weatherDescription === "Light rain" || weatherDescription === "moderate rain" || weatherDescription === "heavy rain" || weatherDescription === "thunderstorm") {
     
    const imgSrc = 'https://media.tenor.com/EAlZMnorrOwAAAAM/life-winter.gif'
     create(imgSrc);
     
  } else if (weatherDescription === "light snow" || weatherDescription === "moderate snow" || weatherDescription === "heavy snow" || weatherDescription === "fog"|| weatherDescription === "mist") {
    const imgSrc = 'https://media.tenor.com/I1A5y1eVv5UAAAAM/cold.gif'
     create(imgSrc);
     
  } else {
    const imgSrc = 'https://media.tenor.com/Vg9vkg6r2bIAAAAM/what-a-sunny-day.gif'
     create(imgSrc);
    
  }

  id1.innerHTML=data.name
  id2.innerHTML=`${data.main.temp} °C`
  id3.innerHTML=data.main.humidity
  id4.innerHTML=`${data.wind.speed} kmph`
  id5.innerHTML=data.weather[0].description
  }
  catch(err){
    c.style.display='none';
    alex.innerHTML='Please Enter the correct City Name';
    alex.style.color='red';
    alex.style.fontSize='25px';
    a.style.borderColor = 'red'
  }
}

  

const spa=document.getElementById('spa')
const load=()=>{
  spa.style.display='block'
  spa.classList.add('loader')
  setTimeout(()=>{
    spa.classList.remove('loader')
    c.style.display = 'block';
  },1000)
  
}
const bu=document.getElementById('btn')
const span=document.getElementById('span')


let executed = false
function reset(){
  
  while(div.firstChild){
    div.removeChild(div.firstChild);
  }
}

bu.onclick = () => {
  load()
  reset()
  

  if (a.value == '') {
    a.style.borderColor = 'red'
    span.innerText = 'Required'
    span.style.color = 'red'
  } else {
      weather()
  }
}