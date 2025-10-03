function isPalindrome(numb){
    if(numb<0){
        return false;
    }
    numb = numb.toString();
    let j = numb.length - 1
    for(i=0; i < numb.length / 2; i++){
        if(numb[i] != numb[j]){
            return false;
        }
        j--;
    }
    return true;
}
// console.log(isPalindrome() ? "true" : "false")
