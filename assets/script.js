// 輪播效果
var myCarousel = document.querySelector('#carouselExampleIndicators')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000, //播放秒數
    wrap: true     //播放方式：重覆播放值 true、不重覆播放值 fasle 
})

/*控制網頁元素：.menuBTN（選單按鈕／三條線）、.navBarD(選單)*/

// 宣告
let _menuBTN = document.querySelector('.menuBTN');
let _navBAR = document.querySelector('.navBAR');
let _closeBTN = document.querySelector('.closeBTN');


// 監聽事件

// 選單按鈕／三條線
_menuBTN.addEventListener('click', function () {
    _navBAR.classList.toggle('navBarSHOW');
});

// 網頁捲動時→選單自動關閉
document.addEventListener('scroll', function () {
    _navBAR.classList.remove('navBarSHOW');
});

// menuBTN按下去後的特效
_menuBTN.addEventListener('click', function () {
    _navBAR.classList.add('navBAR-in');
    _navBAR.classList.remove('navBAR-out');
});
_closeBTN.addEventListener('click', function () {
    _navBAR.classList.add('navBAR-out');
    _navBAR.classList.remove('navBAR-in');
});




