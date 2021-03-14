import { services } from "./script.js";

const button = document.getElementById('button');
const activityOnScreen = document.createElement('h1');

button.addEventListener('click', function(){

    const activity = services.getApi();

    activity.then( data => {

        const newActivity = data.activity;
        activityOnScreen.textContent = newActivity;
        activityOnScreen.classList.add('result');
        button.insertAdjacentElement('afterend', activityOnScreen);
    })
})
