function nhapMang() {
    let number = +document.getElementById('input').value;
    for (let i = 0; i < number; i++) {
        arr[i] = +prompt("nhập " + number + "phần tử của mảng")
    }
    document.getElementById('displayarr').innerHTML = "Mảng gồm các phần tử là:" + arr;
}