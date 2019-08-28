/*
요소 클릭 -> 요소에 맞는 창으로 교체, 요소의 css 변경
*/

let myInfo = document.getElementById('categoryMyInfo');
let CurrentSale = document.getElementById('categoryCurrentSale');

function categoryClassChange(from, to) {
    from.classList.remove('clicked');
    to.classList.add('clicked');
}

myInfo.addEventListener('click', () => {
    categoryClassChange(CurrentSale, myInfo);
});
CurrentSale.addEventListener('click', () => {
    categoryClassChange(myInfo, CurrentSale);
});

























