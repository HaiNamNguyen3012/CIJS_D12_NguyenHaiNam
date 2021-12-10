function sayHello(){
    console.log("Hello World!");
}

document
        .getElementById('btnClickMe')
        .addEventListener('click', function(evt){
            console.log('Hello world! 2');
        });

document
        .getElementById('btnClickMe')
        .addEventListener('click', (evt)=>{
            console.log('Hello world! 3');
        });