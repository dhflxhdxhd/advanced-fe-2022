// app.js

function fetchClass(callback){
    fetch('class.json')
    .then((response) => response.json())
    .then((data) => {
        callback(data)
})
}

function callbackFunc(data){
    const classData = data;
    console.log('classData',classData);
}


fetchClass((data) => callbackFunc(data))