function listprimeOfArray(){
    let arr1=[];
    for (let i=0; i<arr.length; i++){
        checkSNT(arr[i]);
        if (flag){
            arr1.push(arr[i])
        }
    }
    document.getElementById('6').innerHTML= "danh sách các số nguyên tố trong mảng vừa nhập là: " + arr1;
}