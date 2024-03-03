const encryptElements = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

const decryptElements = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
};

function replaceAll(str, mapObj) {
    let re = new RegExp(Object.keys(mapObj).join("|"), "gi");

    return str.replace(re, function (matched) {
        return mapObj[matched.toLowerCase()];
    });
}


function validator(text) {
    let regex = /^[\sa-zA-Z\n]+$/;

    if (text.length < 2) {
        textSetter(null);
        window.alert("Muy pocos caracteres");
    }
    else if (!regex.test(text)) {
        textSetter(null);
        window.alert("Solo caractares de la A-Z sin acentos");
    }

    else {
        return true
    };

}

function textSetter(text) {
    document.getElementById("result").innerText = text;
}


function encryptor(elements) {
    let text = document.getElementById("inputText").value.toLowerCase();

    if (validator(text)) {
        let textChanged = replaceAll(text, elements);
        textSetter(textChanged);
    };
}

function encrypt() {
    encryptor(encryptElements);
}

function decrypt() {
    encryptor(decryptElements);
}

function copy() {
    let copyText = document.getElementById("result");
    // copyText.select();
    navigator.clipboard.writeText(copyText.value);
}
