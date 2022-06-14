const config = require('./config.json');


console.log(config);
module.exports = function(){
    const greet = document.createElement('root');
    console.log(config[0].title)
    greet.innerHTML = config[0].title
    // greet.innerHTML = config[0].title.greetText;

    return greet;
}

