function checkvitri(){
    let number = +document.getElementById('input').value;
    for (let i=0; i<arr.length; i++){
        if (number===arr[i]){
            document.getElementById('7').innerHTML= number + " có thuộc mảng, và đứng ở vị trí thứ " + i;
        }
    }
}