var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = 'white';
ctx.lineWidth = '5';
ctx.lineCap = 'round';
ctx.shadowBlur = .5;
ctx.shadowColor = 'white';

if (canvas.getContext) {
	ctx = canvas.getContext('2d');
 } else {
	const para = document.querySelector('.unsupported');
	para.textContent = 'Browser unsupported for HTML5 Canvas';
 }

function degToRad(degree) {
	var factor = Math.PI/180;
	return degree*factor;
}


function renderTime() {
	var now = new Date();
	var today = now.toDateString();
	var time = now.toLocaleTimeString();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	var milliseconds = now.getMilliseconds();
	var newSeconds = seconds= (milliseconds/1000);

	gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
	gradient.addColorStop(0,'black');
	gradient.addColorStop(1, 'grey');


ctx.beginPath();
ctx.arc(250, 250, 200, degToRad(270), degToRad((hours*15)-90)); 
ctx.stroke();


ctx.beginPath();
ctx.arc(250, 250, 170, degToRad(270), degToRad((minutes*6)-100)); 
ctx.stroke();


ctx.beginPath();
ctx.arc(250, 250, 140, degToRad(270), degToRad((newSeconds*60)-100)); 
ctx.stroke();

ctx.font = "25px Arial";
ctx.fillStyle = 'white';
ctx.fillText(today, 175, 250);

ctx.font = "25px Arial bold";
ctx.fillStyle = 'white';
ctx.fillText(time, 175, 280);

}

setInterval(renderTime, 10);