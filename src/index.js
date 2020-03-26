import _ from 'lodash';

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
