let createTable = document.querySelector('#myBtn');

let table = document.querySelector('.table');

createTable.addEventListener('click', () => {
    let column = document.querySelector("#column").value;
    let row = document.querySelector("#row").value;
    for(let i = 0; i < column; i++){
        let cot = document.createElement('TR');
        table.appendChild(cot);
        for(let j = 0; j < row; j++){
            let dong = document.createElement('TD');
            dong.appendChild(document.createTextNode('Nội dung của bảng'));
            cot.appendChild(dong);
        }
    }
});
