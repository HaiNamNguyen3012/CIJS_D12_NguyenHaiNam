let seconds = 0;
let timeInterval = null;

// hàm xử lý sự kiện cho nút start
document.getElementById('btnStart').addEventListener('click', ()=>{
    timeInterval = setInterval(()=>{
        seconds++;
        const time = formatSecond(seconds);
        document.getElementById('time').innerHTML = time
    }, 1000);

})

// hàm xử lý sự kiện cho nút pause
document.getElementById('btnPause').addEventListener('click', ()=>{
    if(timeInterval){
        clearInterval(timeInterval);
    }
})

// hàm xử lý sự kiện cho nút pause
document.getElementById('btnStop').addEventListener('click', ()=>{
    if(timeInterval){
        clearInterval(timeInterval);
    }
    seconds = 0;
    document.getElementById('time').innerHTML = formatSecond(seconds);
})

function formatSecond(second){
    const n = Math.floor(second / 60);
    const s = second % 60;
    return n + ':' + s;
}
