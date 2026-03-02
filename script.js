function generatePassword(len,ucase,lcase,nums,syms) {
    const uchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lchars = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"
    const symbols = "!@#$%^&*()/][{}"

    let generatedPassword = ""
    let allowedChars = ""

    if (ucase) {allowedChars += uchars}
    if (lcase) {allowedChars += lchars}
    if (nums) {allowedChars += numbers}
    if (syms) {allowedChars += symbols}

    // console.log(allowedChars)

    for (let i = 0; i < len; i++) {
       let ri = Math.floor(Math.random() * allowedChars.length)
       generatedPassword += allowedChars[ri]        
    }
    // console.log(generatedPassword)
    document.getElementById("password").value=generatedPassword

}

// generatePassword(10,true,false,false,false)
// generatePassword(10,true,true,false,false)
// generatePassword(10,true,true,true,false)
// generatePassword(10,true,true,true,true)
function lenControl() {
    let len = document.getElementById("len").value 
    document.getElementById("lenshow").innerText=len

}
function showPassword(){
    const ucase = document.getElementById("ucase").checked 
    const lcase = document.getElementById("lcase").checked 
    const nums = document.getElementById("nums").checked 
    const syms = document.getElementById("syms").checked 
    const len = document.getElementById("len").value
    // console.log(ucase)
    // console.log(lcase)
    // console.log(nums)
    // console.log(syms)
    if(!ucase && !lcase && !nums && !syms){
        alert("Please select atleast one condition!")
    }{
        generatePassword(len,ucase,lcase,nums,syms)
    }

}


function copyPass(){
    const copyText = document.getElementById("password") 
    copyText.select();
    copyText.setSelectionRange(0,999);
    navigator.clipboard.writeText(copyText.value);
    alert("Password copied!")
}