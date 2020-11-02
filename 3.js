function displayNsnt() {
    let count = 0;
    let number = +document.getElementById('input').value;
    let n = 2;
    let arr=[]
    while (count < number) {
        checkSNT(n);
        if (flag==true){
            arr.push(n)
            count++
        }
        n++
    }
    document.getElementById('3').innerHTML= "Danh sách "+ number +" số nguyên tố đầu tiên là: " + arr;
}