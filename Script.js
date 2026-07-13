const canvas=document.getElementById("matrix");
const ctx=canvas.getContext("2d");

function resize(){
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
}
resize();
window.addEventListener("resize",resize);

const chars="01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&";
const size=16;
const columns=Math.floor(window.innerWidth/size);
const drops=new Array(columns).fill(1);

function matrix(){

ctx.fillStyle="rgba(0,0,0,.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#00ff66";
ctx.font=size+"px monospace";

for(let i=0;i<drops.length;i++){

const text=chars[Math.floor(Math.random()*chars.length)];

ctx.fillText(text,i*size,drops[i]*size);

if(drops[i]*size>canvas.height&&Math.random()>0.98)
drops[i]=0;

drops[i]+=3;

}

requestAnimationFrame(matrix);

}

matrix();

const terminal=document.getElementById("terminal");

function randomIP(){
return `${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`;
}

const logs=[
"Initializing...",
"Loading kernel...",
"Scanning network...",
"Opening secure connection...",
"Authenticating...",
"Access simulation...",
"Downloading data...",
"Compiling...",
"Process completed."
];

setInterval(()=>{

const line=document.createElement("div");

line.textContent=
`[${new Date().toLocaleTimeString()}] ${logs[Math.floor(Math.random()*logs.length)]} ${randomIP()}`;

terminal.prepend(line);

while(terminal.children.length>35)
terminal.removeChild(terminal.lastChild);

},40);
