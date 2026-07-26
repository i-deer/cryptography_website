let number_of_letters = 26;

// This is an object
let letter_key_map = {
    'a': 0,
    'b': 1,
    'c': 2,
    'd': 3,
    'e': 4,
    'f': 5,
    'g': 6,
    'h': 7,
    'i': 8,
    'j': 9,
    'k': 10,
    'l': 11,
    'm': 12,
    'n': 13,
    'o': 14,
    'p': 15,
    'q': 16,
    'r': 17,
    's': 18,
    't': 19,
    'u': 20,
    'v': 21,
    'w': 22,
    'x': 23,
    'y': 24,
    'z': 25
};

let alphabet = ['a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

function caesar_cipher(mode, text, key) {
    let encrypted = "";
    let decrypted = "";
    let curr_value = 0;
    let new_char = "";
    let new_value = 0;
    if (mode === "encrypt") {
        for (let i = 0; i < text.length; i++) {
            curr_value = letter_key_map[text[i]];
            new_value = (curr_value + Number(key)) % number_of_letters;
            new_char = alphabet[new_value];
            encrypted += new_char;
        }
        return encrypted;
    } else {
        for (let i = 0; i < text.length; i++) {
            curr_value = letter_key_map[text[i]];
            new_value = (curr_value - Number(key));
            if (new_value < 0) {
                new_value += number_of_letters;
            }
            new_char = alphabet[new_value];
            decrypted += new_char;
        }
        return decrypted;
    }
}
