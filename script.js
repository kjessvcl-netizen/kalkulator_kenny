let riwayatData = [];

// fungsi hitung
function hitung() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let hasil;

    if (isNaN(num1) || isNaN(num2)) {
        hasil = "Harap masukan angka dulu ya anjing";
    } else {
        if (operator === "+") {
            hasil = num1 + num2;
        } else if (operator === "-") {
            hasil = num1 - num2;
        } else if (operator === "*") {
            hasil = num1 * num2;
        } else if (operator === "/") {
            if (num2 === 0) {
                hasil = "Tidak bisa dibagi nol ya kontol";
            } else {
                hasil = num1 / num2;
            }
        }
    }

    document.getElementById("hasil").textContent = hasil;

    // simpan ke riwayat jika hasil angka
    if (!isNaN(hasil)) {
        let teks = `${num1} ${operator} ${num2} = ${hasil}`;
        riwayatData.push(teks);
        tampilkanRiwayat();
    }
}

// tombol bersih
function bersih() {
    document.getElementById("fkalkulator").reset();
    document.getElementById("hasil").textContent = "";
}

// tampilkan riwayat
function tampilkanRiwayat() {
    let list = document.getElementById("listRiwayat");
    list.innerHTML = "";

    riwayatData.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

// tombol show / hide riwayat
function toggleRiwayat() {
    let r = document.getElementById("riwayat");
    r.style.display = r.style.display === "none" ? "block" : "none";
}
