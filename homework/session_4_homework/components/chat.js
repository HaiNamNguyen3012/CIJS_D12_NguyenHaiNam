let data = [
        {id: 0, url: "../image/0-5616x3744.jpg"},
        {id: 1, url: "../image/1-5616x3744.jpg"},
        {id: 2, url: "../image/10-2500x1667.jpg"},
        {id: 3, url: "../image/100-2500x1656.jpg"},
        {id: 4, url: "../image/1000-5626x3635.jpg"},
        {id: 5, url: "../image/1001-5616x3744.jpg"},
        {id: 6, url: "../image/1002-4312x2868.jpg"},
        {id: 7, url: "../image/1003-1181x1772.jpg"},
        {id: 8, url: "../image/1004-5616x3744.jpg"},
        {id: 9, url: "../image/1005-5760x3840.jpg"},
        {id: 10, url: "../image/1006-3000x2000.jpg"},
        {id: 11, url: "../image/1008-5616x3744.jpg"},
        {id: 12, url: "../image/1009-5000x7502.jpg"},
        {id: 13, url: "../image/101-2621x1747.jpg"},
        {id: 14, url: "../image/1010-5184x3456.jpg"},
        {id: 15, url: "../image/1011-5472x3648.jpg"},
        {id: 16, url: "../image/1012-3973x2639.jpg"},
        {id: 17, url: "../image/1014-6016x4000.jpg"},
        {id: 18, url: "../image/1015-6000x4000.jpg"},
        {id: 19, url: "../image/1016-3844x2563.jpg"},
        {id: 20, url: "../image/1018-3914x2935.jpg"},
        {id: 21, url: "../image/1019-5472x3648.jpg"},
        {id: 22, url: "../image/1020-4288x2848.jpg"},
        {id: 23, url: "../image/1021-2048x1206.jpg"},
        {id: 24, url: "../image/1022-6000x3376.jpg"},
        {id: 25, url: "../image/1023-3955x2094.jpg"},
        {id: 26, url: "../image/1024-1920x1280.jpg"},
        {id: 27, url: "../image/1025-4951x3301.jpg"}
];

class showOff {
    $container;
    $title;
    $showOff;
    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('content');
        this.$container.style.textAlign = 'center';
        this.$title = document.createElement('h3');
        this.$title.innerHTML = 'Show image';
        this.$showOff = document.createElement('div');
        this.$showOff.classList.add('showOff');
    }
    render(){
        this.$container.appendChild(this.$title);
        this.$container.appendChild(this.$showOff);
        for(let i = 0; i < data.length; i++){
            this.$image = document.createElement('IMG');
            this.$image.setAttribute("src", data[i].url);
            this.$showOff.appendChild(this.$image);
        }
        return this.$container;
    }
}

export { showOff };