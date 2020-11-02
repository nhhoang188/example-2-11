function xoaN(){
    let number = +document.getElementById('input').value;
    for (let i=0; i<arr.length; i++){
        if (number===arr[i]){
            arr.splice(i,1)
        }
    }
    console.log(arr);
}