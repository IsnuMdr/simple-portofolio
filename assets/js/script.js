// Typing

const teks = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const isiTeks = ['Junior Web Developer', 'Student', 'Computer Engineering'];
const delayKetik = 70;
const delayHapus = 30;
const delayTeks = 2500; // delay ketika teks sudah selesai diketik sebelum dihapus
let teksIndex = 0;
let charIndex = 0;

function ketik() {
    if (charIndex < isiTeks[teksIndex].length) {
        if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
        teks.innerText += isiTeks[teksIndex].charAt(charIndex);
        charIndex++;
        setTimeout(ketik, delayKetik);
    } else {
        cursor.classList.remove("typing");
        setTimeout(hapus, delayTeks);
    }
}

function hapus() {
    if (charIndex > 0) {
        if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
        teks.innerText = isiTeks[teksIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(hapus, delayHapus);
    } else {
        cursor.classList.remove("typing");
        teksIndex++;
        if (teksIndex >= isiTeks.length) teksIndex = 0;
        setTimeout(ketik, delayKetik);
    }
}

if (isiTeks.length) setTimeout(ketik);

// End Typing