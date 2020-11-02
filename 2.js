function check(){
    let number = +document.getElementById('input').value;
    checkSNT(number);
    if (flag === true) {
            document.getElementById('2').innerHTML = this.number + " là số nguyên tố <br/>";
        } else {
            document.getElementById('2').innerHTML = this.number + " không phải là số nguyên tố <br/>";
        }
}