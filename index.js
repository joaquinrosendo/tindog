// Remember to import the data and Dog class!
import dogData from './data.js';
import Dog from './Dog.js';

function render(){
    document.getElementById('card-container').innerHTML = dog.getDogHtml();
}

const dog = new Dog(dogData[0]);
render();