const pages=[
"Hay sueños que nunca desaparecen.",
"Sé que One Direction fue parte de una etapa muy especial para ti.",
"Sé que siempre soñaste con verlos en vivo... y ese momento nunca llegó.",
"También recuerdo que te hice una promesa: haría todo lo posible por cumplir tus sueños.",
"No puedo regresar el tiempo ni reunir a One Direction.",
"Pero sí puedo regalarte un pedacito de ese sueño. ❤️"];
let i=-1,start=false;
const t=document.getElementById('text'),b=document.getElementById('btn'),m=document.getElementById('music');
function type(s){t.innerHTML='';let n=0;let h=setInterval(()=>{t.innerHTML=s.slice(0,n++);if(n>s.length)clearInterval(h)},35)}
b.onclick=async()=>{
if(!start){start=true;b.textContent='Continuar';try{await m.play();m.volume=0;let v=0;let f=setInterval(()=>{v+=.02;m.volume=Math.min(v,.5);if(v>=.5)clearInterval(f)},100);}catch(e){}}
i++;
if(i<pages.length){type(pages[i]);return;}
document.getElementById('story').classList.add('hide');document.getElementById('reveal').classList.remove('hide');
let c=3,d=document.getElementById('count');let x=setInterval(()=>{d.textContent=c;c--;if(c<0){clearInterval(x);d.remove();flash();confetti();}},1000)
}
function flash(){let f=document.getElementById('flash');f.style.transition='opacity .4s';f.style.opacity=1;setTimeout(()=>f.style.opacity=0,400)}
function confetti(){const cv=document.getElementById('confetti'),ctx=cv.getContext('2d');cv.width=innerWidth;cv.height=innerHeight;let p=[...Array(180)].map(()=>({x:Math.random()*cv.width,y:-20,r:2+Math.random()*5,dx:(Math.random()-.5)*4,dy:2+Math.random()*5}));
(function a(){ctx.clearRect(0,0,cv.width,cv.height);p.forEach(o=>{ctx.beginPath();ctx.arc(o.x,o.y,o.r,0,7);ctx.fill();o.x+=o.dx;o.y+=o.dy});requestAnimationFrame(a)})()}
