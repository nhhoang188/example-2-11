function pushX(){
    let numx= prompt("Nhập vào số X ")
    arr.push(numx);
    arr.sort(function (a, b){return a-b})
    document.getElementById('displayarr').innerHTML = "Mảng gồm các phần tử là:" + arr;
}