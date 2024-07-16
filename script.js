let encryptedText = '';

document.getElementById('encryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    if (inputText) {
        encryptedText = caesarEncrypt(inputText, 3);
        document.getElementById('outputText').textContent = encryptedText;
        document.getElementById('inputText').value = '';  // Limpia el área de texto
        document.querySelector('.output h2').textContent = 'Mensaje encriptado';  // Cambia el mensaje
    } else {
        alert('Por favor, ingrese un texto para encriptar.');
    }
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    if (encryptedText) {
        const decryptedText = caesarDecrypt(encryptedText, 3);
        document.getElementById('outputText').textContent = decryptedText;
        document.querySelector('.output h2').textContent = 'Mensaje desbloqueado';  // Cambia el mensaje
    } else {
        alert('Por favor, encripte un texto antes de desencriptar.');
    }
});

function caesarEncrypt(text, shift) {
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        // A-Z
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }
        // a-z
        else if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
        return char;
    }).join('');
}

function caesarDecrypt(text, shift) {
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        // A-Z
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
        }
        // a-z
        else if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
        }
        return char;
    }).join('');
}

