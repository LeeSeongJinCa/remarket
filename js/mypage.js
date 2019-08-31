const myInfo = document.getElementById('categoryMyInfo');
const CurrentSale = document.getElementById('categoryCurrentSale');
const itemWrap = document.getElementById('itemWrap');
const itemInfoInner = document.getElementById('itemInfoInner');
const itemProfileInner = document.getElementsByClassName('itemProfileInner');
const edit = document.getElementById('edit');
const editCancel = document.getElementById('editCancel');

function itemReset() {
    for(let i = 0; i < itemProfileInner.length; i++) {
        itemProfileInner[i].style.display = "none";
    }
    itemInfoInner.style.display = "none";
}
function itemBlock(tag) {
    itemReset();
    tag.style.display = "block";
}
function itemClicked(from, to) {
    from.classList.remove('clicked');
    to.classList.add('clicked');
}

window.onload = () => {
    itemBlock(itemProfileInner[0]);
    itemClicked(CurrentSale, myInfo);
}