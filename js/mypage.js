/*
요소 클릭 -> 요소에 맞는 창으로 교체, 요소의 css 변경
*/

window.onload = () => {
    let page = localStorage.getItem('listPage');
    if(page == 1) {
        categoryClassChange(CurrentSale, myInfo);
        itemDisplay(itemInfoInner, itemProfileInner);
    } else if(page == 2){
        categoryClassChange(myInfo, CurrentSale);
        itemDisplay(itemProfileInner, itemInfoInner);
    } else {
        return console.log('Error');
    }
}

const myInfo = document.getElementById('categoryMyInfo');
const CurrentSale = document.getElementById('categoryCurrentSale');
const itemWrap = document.getElementById('itemWrap');
const itemInfoInner = document.getElementById('itemInfoInner');
const itemProfileInner = document.getElementById('itemProfileInner');

function categoryClassChange(from, to) {
    from.classList.remove('clicked');
    to.classList.add('clicked');
}

function itemDisplay(from, to) {
    from.style.display = "none";
    to.style.display = "block";
}

myInfo.addEventListener('click', () => {
    categoryClassChange(CurrentSale, myInfo);
    itemDisplay(itemInfoInner, itemProfileInner);
    localStorage.setItem('listPage', 1);
});
CurrentSale.addEventListener('click', () => {
    categoryClassChange(myInfo, CurrentSale);
    itemDisplay(itemProfileInner, itemInfoInner);
    localStorage.setItem('listPage', 2);
});

