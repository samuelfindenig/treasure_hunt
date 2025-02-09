function caesarCipherDecrypt(text, shift) {
    return text.replace(/[a-zA-Z]/g, function(c) {
        let base = c <= 'Z' ? 65 : 97;
        return String.fromCharCode((c.charCodeAt(0) - base - shift + 26) % 26 + base);
    });
}

function checkAnswer() {
    let userInput = document.getElementById("userInput").value.trim().toLowerCase();
    let decryptedText = caesarCipherDecrypt("PQMZWOTGXPMV", 8).toLowerCase();
    
    if (userInput === decryptedText) {
        window.location.href = "hint1.html";
    } else {
        alert("Falsche Antwort, versuche es erneut!");
    }
}
