function selectChange() {
    let otherItem = document.getElementById('otherItem');
    if (document.getElementById('selectCategory').value == "기타") {
        otherItem.style.display = "block";
    } else{
        otherItem.style.display = "none";
    }
}

const server = 'http://remarket.tk';
let mainImg;
function uploadFinish() {
    let title = document.getElementById('itemTitle');
    let content = document.getElementById('itemContent');
    let price = document.getElementById('itemPrice');
    let desiredItem = document.getElementById('itemDesired');
    let category = document.getElementById('selectCategory').value;

    if (document.getElementById('img').getAttribute('src') == null || document.getElementById('img').getAttribute('src') == "") {
        alert('사진을 업로드해주세요');
        // window.location.href = window.location.href;
        return;
    } else if(title.value.replace(/ /g, "") == "") {
        title.focus();
        return alert('상품명을 입력해주세요');
    } else if (content.value.replace(/ /g, "") == "") {
        content.focus();
        return alert('상품에 대한 설명을 입력해주세요');
    } else if(category == "카테고리") {
        return alert('카테고리를 선택해주세요');
    }

    if(cate == "기타") {
        if (document.getElementById('otherItem').value.replace(/ /g, "") == "") {
            alert('기타상품을 입력해주세요');
            return;
        }11+1
        cate = document.getElementById('otherItem').value;
    }

    let userdata = {
        "title": title.value,
        "content": content.value,
        "main_img": mainImg,
        "price": price.value,
        "desired_item": desiredItem.value,
        "cate": cate
    }
    let data = {
        method: "POST",
        url: server + '/upload',
        data: userdata,
        headers: {
            'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjcxNjczMTYsIm5iZiI6MTU2NzE2NzMxNiwianRpIjoiZDQ0YWI4YWYtNmZhYS00YmFkLTg1OTctYWYxZDBlMjk1OWM0IiwiZXhwIjoxNTY3MTY5MTE2LCJpZGVudGl0eSI6eyJ1dWlkIjo4fSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.MWVANTjFORsEZxK2S3rExhGJw1ScNmPTe7lYTBNN__o'
        },
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


















