const server = 'http://remarket.tk';
let mainImg;
function uploadFinish() {
    let title = document.getElementById('itemTitle');
    let category = document.getElementById('selectCategory').value;
    let date = document.getElementById('itemDate').value;
    let locX = document.getElementById('selectLocationX').value;
    let locY = document.getElementById('selectLocationY').value;
    if (document.getElementById('img').getAttribute('src') == null || document.getElementById('img').getAttribute('src') == "") {
        alert('사진을 업로드해주세요');
        // window.location.href = window.location.href;
        return;
    } else if(title.value.replace(/ /g, "") == "") {
        title.focus();
        return alert('상품명을 입력해주세요');
    } else if(category == "카테고리") {
        return alert('카테고리를 선택해주세요');
    } else if(date == "") {
        return alert('구매 날짜를 선택해주세요');
    } else if(locX == "NULL" || locY == "NULL") {
        return alert('위치를 선택해주세요');
    }
    if(cate == "기타") {
        if (document.getElementById('otherItem').value.replace(/ /g, "") == "") {
            alert('기타상품을 입력해주세요');
            return;
        }
        cate = document.getElementById('otherItem').value;
    }
    let userdata = {
        "title": title.value,
        "cate": cate,
        "loc": locX,
        "main_img": mainImg,
        "buy_time": date,
        "permission": permission
    }
    let data = {
        method: "POST",
        url: server + '/upload',
        data: userdata,
        json: true
    };
    axios(data).then((respond) => {
        console.log(respond);
    }).catch((respond) => {
        console.log(respond);
    })  
}
function readImage(input) {
    if (input.files && input.files[0]) {
        let FR = new FileReader();
        FR.onload = function (e) {``
            document.getElementById('img').setAttribute('src', e.target.result);
            mainImg = e.target.result;
        };
        FR.readAsDataURL(input.files[0]);
    }
}
$(document).ready(function () {
    $("#baseFile").change(function () {
        readImage(this);
    });
    $("#baseFile").trigger("change");
});
$('.addfiles').on('click', function () {
    $('#fileupload').click();
    return false;
});
function deleteImage() {
    document.getElementById('baseFile').value = "";
    document.getElementById('img').removeAttribute('src');
}
function onlyNumber(event) {
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ((keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 9 || keyID == 46 || keyID == 37 || keyID == 39 || keyID == 116) {
        return;
    } else {
        return false;
    }
}
function testNumber(ob) {
    var reg = /[\ㄱ-ㅎㅏ-ㅣ가-힣]/gi;
    ob.value = ob.value.replace(reg, '');
}
let cate;
function cateChange() {
    let select = document.getElementById('selectCategory');
    cate = select.value;
}
function selectChange() {
    let otherItem = document.getElementById('otherItem');
    if (document.getElementById('selectCategory').value == "기타") {
        otherItem.style.display = "block";
    } else {
        otherItem.style.display = "none";
    }
}

















