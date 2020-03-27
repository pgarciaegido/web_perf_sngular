import _ from 'lodash';
import { add } from 'lodash-es';

const myWorker = new Worker("./worker.js");

console.log(_.camelCase("Pablo García"));

function getModule() {
  import('./module.js')
    .then((module) => {
      console.log(module.default());
    })
}

setTimeout(() => {
  getModule();
}, 2000);
const button = document.getElementById('calc');
button.addEventListener('click', function(){
  button.setAttribute('disabled', true);
  console.log('clicked!!');

  myWorker.postMessage('START')
  
  myWorker.onmessage = function(ev) {
    console.log('terminó el worker con el mensaje: ', ev.data);
    document.getElementById('counter').innerHTML = ev.data
    button.removeAttribute('disabled');
  }
});

function sendAnalytics() {
  console.log('Sending analytics 🦅')
}

requestIdleCallback(sendAnalytics);

// https://csstriggers.com/