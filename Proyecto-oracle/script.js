function encryptText() {
    const inputText = document.getElementById("inputText").value;
    const errorMessage = document.getElementById("error-message");
    const shift = 3;  // Simple Caesar Cipher shift
    let encryptedText = "";

    if (!inputText.match(/^[A-Za-z\s\W]*$/)) {  // Check if the input contains invalid characters
        errorMessage.textContent = "Error: Only letters and special characters are allowed!";
        errorMessage.style.visibility = "visible";
        document.getElementById("outputText").value = "";
        return;
    } else {
        errorMessage.style.visibility = "hidden";
    }

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];

        if (char.match(/[a-z]/i)) {
            const code = inputText.charCodeAt(i);

            // Uppercase letters
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }

            // Lowercase letters
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }

        encryptedText += char;
    }

    document.getElementById("outputText").value = encryptedText;
}

function clearText() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
    document.getElementById("error-message").style.visibility = "hidden";
}
