function wheel(key, mode) {
    const wheel = document.getElementById('outer_cipher_wheel');
    let angle = 360;  // How much the wheel is currently turned
    let rotations = key - 1; // How many times the wheel needs to be displaced

    function encrypt_rotate() {
        angle -= 13.8;
        rotations--;

        wheel.style.transform = `rotate(${angle}deg)`;

        while (rotations >= 0) {
            encrypt_rotate();
        }
    }

    function decrypt_rotate() {
        angle += 13.8;
        angle %= 360;
        rotations--;

        wheel.style.transform = `rotate(${angle}deg)`;

        while (rotations >= 0) {
            decrypt_rotate();
        }
    }

    // Initial call to rotate
    if (mode === "encrypt") {
        encrypt_rotate();
    } else if (mode === "decrypt") {
        decrypt_rotate();
    }
}

function reset() {
    const wheel = document.getElementById('outer_cipher_wheel');

    wheel.style.transform = 'initial';
}