function laSoNguyenTo(n){
    if(n < 2){
        return false;
    } else{
        for(let i = 2; i <= Math.sqrt(n); i++){
            if(n%i===0){
                return false;
            }
        }
        return true;
    }
}

function soNguyenToGiuaHaiSo(left,right){
    let arr = [];
    for(let i = left; i < right; i++){
        if(laSoNguyenTo(i) === true){
            arr.push(i);
        }
    }
    return arr;
}

let find = document.querySelector('#myBtn');
let result = document.querySelector('.result');
find.addEventListener('click', () => {
    let left = document.querySelector("#left-number").value;
    let right = document.querySelector("#right-number").value;
    let primeNumberArr = soNguyenToGiuaHaiSo(left,right);
    result.innerHTML += `<p>Số nguyên tố trong khoảng (${left};${right}) là ${primeNumberArr}</p>`;
})
