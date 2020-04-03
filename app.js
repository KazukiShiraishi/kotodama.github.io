var key = 0;
var count = 0;
window.onload = function () {
    var count = JSON.parse(localStorage.getItem("count"));
    for(key = 0; key <= count; key ++){
        var object = JSON.parse(localStorage.getItem(key));
        if(object == null)break;
        var code = object.data1;
        var str = object.data2;

        const list = document.querySelector('.list');
        const html = `
        <li class="listItem">
            <div class="descItem">
                <span class="code">${code}</span>
                <span>${str}</span>
            </div>
            <i class="far fa-trash-alt delete"></i>    
        </li>
        `;
        list.innerHTML += html;
    }
}

var SearchRhyme = function () {
    //const result = document.querySelector('.result');
    //result.childNodes.remove();

    var str = document.search.searchtext.value;
    var flag = 0;
    var len = str.length;

    if(str == ""){
        return(true);
    }
    for(var i = 0; i < len; i ++){
        if(str[i] != "あ" && str[i] != "い" && str[i] != "う" && str[i] != "え" && str[i] != "お"
         && str[i] != "か" && str[i] != "き" && str[i] != "く" && str[i] != "け" && str[i] != "こ"
         && str[i] != "さ" && str[i] != "し" && str[i] != "す" && str[i] != "せ" && str[i] != "そ"
         && str[i] != "た" && str[i] != "ち" && str[i] != "つ" && str[i] != "て" && str[i] != "と" 
         && str[i] != "な" && str[i] != "に" && str[i] != "ぬ" && str[i] != "ね" && str[i] != "の"
         && str[i] != "は" && str[i] != "ひ" && str[i] != "ふ" && str[i] != "へ" && str[i] != "ほ"
         && str[i] != "ま" && str[i] != "み" && str[i] != "む" && str[i] != "め" && str[i] != "も"
         && str[i] != "や" && str[i] != "ゆ" && str[i] != "よ"
         && str[i] != "ら" && str[i] != "り" && str[i] != "る" && str[i] != "れ" && str[i] != "ろ" 
         && str[i] != "わ" && str[i] != "を" && str[i] != "ん"
         && str[i] != "が" && str[i] != "ぎ" && str[i] != "ぐ" && str[i] != "げ" && str[i] != "ご"
         && str[i] != "ざ" && str[i] != "じ" && str[i] != "ず" && str[i] != "ぜ" && str[i] != "ぞ"
         && str[i] != "だ" && str[i] != "ぢ" && str[i] != "づ" && str[i] != "で" && str[i] != "ど" 
         && str[i] != "ば" && str[i] != "び" && str[i] != "ぶ" && str[i] != "べ" && str[i] != "ぼ"
         && str[i] != "ぱ" && str[i] != "ぴ" && str[i] != "ぷ" && str[i] != "ぺ" && str[i] != "ぽ"
         && str[i] != "ぁ" && str[i] != "ぃ" && str[i] != "ぅ" && str[i] != "ぇ" && str[i] != "ぉ"
         && str[i] != "ゃ" && str[i] != "ゅ" && str[i] != "ょ"
         && str[i] != "っ" && str[i] != "ー" && str[i] != "。"){
            flag = 1;
        }else{
            if(str[len - 1] != "。")flag = 1;
        }
    }
    if(flag == 0){
        CodeRhyme();
    }else{
        alert("無効な文字列です。");
    }
}

var CodeRhyme = function () {
    var str = document.search.searchtext.value;
    var len = str.length;
    var arr = [len - 2];
    var code = 0;
    var x = 1;

    for(var j = 0; j < len; j ++){
        if(str[j] == "あ" || str[j] == "か" || str[j] == "さ" || str[j] == "た" || str[j] == "な"
         || str[j] == "は" || str[j] == "ま" || str[j] == "や" || str[j] == "ら" || str[j] == "わ"
         || str[j] == "が" || str[j] == "ざ" || str[j] == "だ" || str[j] == "ば" || str[j] == "ぱ"
         || str[j] == "ぁ" || str[j] == "ゃ")arr[j] = 1;
        if(str[j] == "い" || str[j] == "き" || str[j] == "し" || str[j] == "ち" || str[j] == "に"
         || str[j] == "ひ" || str[j] == "み" || str[j] == "り"
         || str[j] == "ぎ" || str[j] == "じ" || str[j] == "ぢ" || str[j] == "び" || str[j] == "ぴ"
         || str[j] == "ぃ")arr[j] = 2;
        if(str[j] == "う" || str[j] == "く" || str[j] == "す" || str[j] == "つ" || str[j] == "ぬ"
         || str[j] == "ふ" || str[j] == "む" || str[j] == "ゆ" || str[j] == "る"
         || str[j] == "ぐ" || str[j] == "ず" || str[j] == "づ" || str[j] == "ぶ" || str[j] == "ぷ"
         || str[j] == "ぅ" || str[j] == "ゅ")arr[j] = 3;
        if(str[j] == "え" || str[j] == "け" || str[j] == "せ" || str[j] == "て" || str[j] == "ね"
         || str[j] == "へ" || str[j] == "め" || str[j] == "れ"
         || str[j] == "げ" || str[j] == "ぜ" || str[j] == "で" || str[j] == "べ" || str[j] == "ぺ"
         || str[j] == "ぇ")arr[j] = 4;
        if(str[j] == "お" || str[j] == "こ" || str[j] == "そ" || str[j] == "と" || str[j] == "の"
         || str[j] == "ほ" || str[j] == "も" || str[j] == "よ" || str[j] == "ろ" || str[j] == "を"
         || str[j] == "ご" || str[j] == "ぞ" || str[j] == "ど" || str[j] == "ぼ" || str[j] == "ぽ"
         || str[j] == "ぉ" || str[j] == "ょ")arr[j] = 5;
        if(str[j] == "っ" || str[j] == "ん" || str[j] == "ー")arr[j] = 6;
    }
    for(var k = 0; k < len; k ++){
        if(arr[k] == 1)code += 1 * x;
        if(arr[k] == 2)code += 2 * x;
        if(arr[k] == 3)code += 3 * x;
        if(arr[k] == 4)code += 4 * x;
        if(arr[k] == 5)code += 5 * x;
        if(arr[k] == 6)x /= 10;
        x *= 10;
    }

    var count = JSON.parse(localStorage.getItem("count"));
    var k = 0;
    for(key = 0; key <= count; key ++){
        var object = JSON.parse(localStorage.getItem(key));
        if(object == null)break;
        var num = object.data1;
        var str = object.data2;

        if(num == code){
            const list = document.querySelector('.result');
            const html = `
            <li class="listItem">
                <div class="descItem">
                    <span class="code">${code}</span>
                    <span>${str}</span>
                </div>
                <i class="far fa-trash-alt delete"></i>    
            </li>
            `;
            list.innerHTML += html;
            k ++;
        }
    }
    if(k == 0){
        alert("お探しの文字列は見つかりませんでした。");
    }else{
        alert(k + "件の文字列がヒットしました。");
    }
}

var AddRhyme = function () {
    var str = document.add.addtext.value;
    var flag = 0;
    var len = str.length;

    if(str == ""){
        return(true);
    }
    for(var i = 0; i < len; i ++){
        if(str[i] != "あ" && str[i] != "い" && str[i] != "う" && str[i] != "え" && str[i] != "お"
         && str[i] != "か" && str[i] != "き" && str[i] != "く" && str[i] != "け" && str[i] != "こ"
         && str[i] != "さ" && str[i] != "し" && str[i] != "す" && str[i] != "せ" && str[i] != "そ"
         && str[i] != "た" && str[i] != "ち" && str[i] != "つ" && str[i] != "て" && str[i] != "と" 
         && str[i] != "な" && str[i] != "に" && str[i] != "ぬ" && str[i] != "ね" && str[i] != "の"
         && str[i] != "は" && str[i] != "ひ" && str[i] != "ふ" && str[i] != "へ" && str[i] != "ほ"
         && str[i] != "ま" && str[i] != "み" && str[i] != "む" && str[i] != "め" && str[i] != "も"
         && str[i] != "や" && str[i] != "ゆ" && str[i] != "よ"
         && str[i] != "ら" && str[i] != "り" && str[i] != "る" && str[i] != "れ" && str[i] != "ろ" 
         && str[i] != "わ" && str[i] != "を" && str[i] != "ん"
         && str[i] != "が" && str[i] != "ぎ" && str[i] != "ぐ" && str[i] != "げ" && str[i] != "ご"
         && str[i] != "ざ" && str[i] != "じ" && str[i] != "ず" && str[i] != "ぜ" && str[i] != "ぞ"
         && str[i] != "だ" && str[i] != "ぢ" && str[i] != "づ" && str[i] != "で" && str[i] != "ど" 
         && str[i] != "ば" && str[i] != "び" && str[i] != "ぶ" && str[i] != "べ" && str[i] != "ぼ"
         && str[i] != "ぱ" && str[i] != "ぴ" && str[i] != "ぷ" && str[i] != "ぺ" && str[i] != "ぽ"
         && str[i] != "ぁ" && str[i] != "ぃ" && str[i] != "ぅ" && str[i] != "ぇ" && str[i] != "ぉ"
         && str[i] != "ゃ" && str[i] != "ゅ" && str[i] != "ょ"
         && str[i] != "っ" && str[i] != "ー" && str[i] != "。"){
            flag = 1;
        }else{
            if(str[len - 1] != "。")flag = 1;
        }
    }
    if(flag == 0){
        SetRhyme();
    }else{
        alert("無効な文字列です。");
    }
}

var SetRhyme = function () {
    var str = document.add.addtext.value;
    var len = str.length;
    var arr = [len - 2];
    var code = 0;
    var x = 1;

    for(var j = 0; j < len; j ++){
        if(str[j] == "あ" || str[j] == "か" || str[j] == "さ" || str[j] == "た" || str[j] == "な"
         || str[j] == "は" || str[j] == "ま" || str[j] == "や" || str[j] == "ら" || str[j] == "わ"
         || str[j] == "が" || str[j] == "ざ" || str[j] == "だ" || str[j] == "ば" || str[j] == "ぱ"
         || str[j] == "ぁ" || str[j] == "ゃ")arr[j] = 1;
        if(str[j] == "い" || str[j] == "き" || str[j] == "し" || str[j] == "ち" || str[j] == "に"
         || str[j] == "ひ" || str[j] == "み" || str[j] == "り"
         || str[j] == "ぎ" || str[j] == "じ" || str[j] == "ぢ" || str[j] == "び" || str[j] == "ぴ"
         || str[j] == "ぃ")arr[j] = 2;
        if(str[j] == "う" || str[j] == "く" || str[j] == "す" || str[j] == "つ" || str[j] == "ぬ"
         || str[j] == "ふ" || str[j] == "む" || str[j] == "ゆ" || str[j] == "る"
         || str[j] == "ぐ" || str[j] == "ず" || str[j] == "づ" || str[j] == "ぶ" || str[j] == "ぷ"
         || str[j] == "ぅ" || str[j] == "ゅ")arr[j] = 3;
        if(str[j] == "え" || str[j] == "け" || str[j] == "せ" || str[j] == "て" || str[j] == "ね"
         || str[j] == "へ" || str[j] == "め" || str[j] == "れ"
         || str[j] == "げ" || str[j] == "ぜ" || str[j] == "で" || str[j] == "べ" || str[j] == "ぺ"
         || str[j] == "ぇ")arr[j] = 4;
        if(str[j] == "お" || str[j] == "こ" || str[j] == "そ" || str[j] == "と" || str[j] == "の"
         || str[j] == "ほ" || str[j] == "も" || str[j] == "よ" || str[j] == "ろ" || str[j] == "を"
         || str[j] == "ご" || str[j] == "ぞ" || str[j] == "ど" || str[j] == "ぼ" || str[j] == "ぽ"
         || str[j] == "ぉ" || str[j] == "ょ")arr[j] = 5;
        if(str[j] == "っ" || str[j] == "ん" || str[j] == "ー")arr[j] = 6;
    }
    for(var k = 0; k < len; k ++){
        if(arr[k] == 1)code += 1 * x;
        if(arr[k] == 2)code += 2 * x;
        if(arr[k] == 3)code += 3 * x;
        if(arr[k] == 4)code += 4 * x;
        if(arr[k] == 5)code += 5 * x;
        if(arr[k] == 6)x /= 10;
        x *= 10;
    }

    const list = document.querySelector('.list');
    const html = `
    <li class="listItem">
        <div class="descItem">
            <span class="code">${code}</span>
            <span>${str.substr(0, len - 1)}</span>
        </div>
        <i class="far fa-trash-alt delete"></i>    
    </li>
    `;
    list.innerHTML += html;

    var data = {
        data1: code,
        data2: str.substr(0, len - 1)
    }
    localStorage.setItem(key, JSON.stringify(data));

    localStorage.setItem("count", key);
    key ++;

    document.add.addtext.value = '';
}

const list = document.querySelector('.list');
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const result = document.querySelector('.result');
result.addEventListener('click', e => {
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

var desc1 = 0;
var descliption1 = function () {
    if(desc1 == 0){
        const descliption1 = document.querySelector('.descliption1');
        const desclist1 = `
        <li class="descliptionItem">
        <span>入力に使用可能な文字は平仮名に限られます。
        また、文字列の最後には、「。」を入力してください。
        </br>
        入力された文字列から識別コードが作成されます。
        既存の同じ識別コードのコンテンツを表示します。
        </span>
        </li>
        `;
        descliption1.innerHTML += desclist1;
        desc1 = 1;
    }
}

var desc2 = 0;
var descliption2 = function () {
    if(desc2 == 0){
        const descliption2 = document.querySelector('.descliption2');
        const desclist2 = `
        <li class="descliptionItem">
        <span>入力に使用可能な文字は平仮名に限られます。
        また、文字列の最後には、「。」を入力してください。
        </br>
        入力された文字列から識別コードが作成され、localStorage上に保存されます。
        </span>
        </li>
        `;
        descliption2.innerHTML += desclist2;
        desc2 = 1;
    }
}
