// Create the Dog class here

class Dog {
    constructor(dogData){
        Object.assign(this, dogData);
    }

    getDogHtml(){
        const {name, avatar, age, bio} = this;

        return `<div class="dog-card">
                    <img src="${avatar}">
                    <div class="dog-info">
                        <h2 class="dog-name">${name}, ${age}</h2>
                        <p class="dog-bio">${bio}</p>
                    </div>
                </div>`
    }
}

export default Dog;