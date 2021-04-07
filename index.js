// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
<div id="main" class='fullscreen'> yo
<div id="ctr" class="ctr">text</div> 
<div id="button1" class="button"></div>
</div>`;
document.getElementById('button1').addEventListener("click", myScript);
function myScript(){
document.getElementById('ctr').innerHTML=Date()
}