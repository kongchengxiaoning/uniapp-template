import CryptoJS from './aes'
var key = CryptoJS.enc.Utf8.parse('ZORDA5FPACLBK8E0')
var iv = CryptoJS.enc.Utf8.parse('ZORDA5FPACLBK8E0')
function Encrypt(word) {
  var srcs = CryptoJS.enc.Utf8.parse(word)
  var encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  return encrypted.ciphertext.toString().toUpperCase()
}
function Decrypt(word) {
  var encryptedHexStr = CryptoJS.enc.Hex.parse(word)
  var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  var decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}

module.exports = {
  Encrypt: Encrypt,
  Decrypt: Decrypt
}

