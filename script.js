document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let rank = document.getElementById("rank").value;
    let contact = document.getElementById("contact").value;

    if (name === "" || contact === "") {
      alert("Harap isi semua data sebelum mengirim.");
      return;
    }

    let phoneNumber = "6285370193258"; // Ganti dengan nomor WhatsApp admin tanpa "+", gunakan format internasional
    let message = `Halo, saya ingin memesan jasa joki ML!%0A%0A*Nama:* ${name}%0A*Rank yang dipilih:* ${rank}%0A*Nomor WhatsApp:* ${contact}%0A%0ATerima kasih!`;

    let whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
  });
