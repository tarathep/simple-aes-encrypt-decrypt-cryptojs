function encrypt(){
    var inputan = document.getElementById('inputan').value;
    var encrypted = CryptoJS.AES.encrypt(inputan, "secret-passphase" ,{ mode: CryptoJS.mode.ECB });
    document.getElementById('app').innerHTML = encrypted;
}
  
function decrypte(){
    var inputan2 = document.getElementById('inputan2').value;
    var decrypted = CryptoJS.AES.decrypt(inputan2, "passphase",{ mode: CryptoJS.mode.ECB });
    document.getElementById('app2').innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
}