// Scroll reveal effect
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const reveal = () => {
    sections.forEach((sec) => {
      const top = sec.getBoundingClientRect().top;
      const winHeight = window.innerHeight;
      if (top < winHeight - 100) {
        sec.style.opacity = 1;
        sec.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", reveal);
  reveal();
});
// Toggle menu
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  toggle.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section"); // Ini akan memilih semua section, termasuk #contact

  const reveal = () => {
    sections.forEach((sec) => {
      const top = sec.getBoundingClientRect().top;
      const winHeight = window.innerHeight;

      // Jika elemen masuk ke dalam viewport (dengan sedikit offset)
      if (top < winHeight - 100) {
        sec.style.opacity = 1; // Ini masih berfungsi
        sec.style.transform = "translateY(0)"; // Ini juga berfungsi
        sec.classList.add("is-visible"); // <<< TAMBAHKAN INI
      } else {
        // Optional: Untuk menyembunyikan kembali saat menggulir ke atas
        sec.classList.remove("is-visible");
        // Atau atur kembali ke state awal jika Anda ingin efeknya berulang
        // sec.style.opacity = 0;
        // sec.style.transform = "translateY(50px)";
      }
    });
  };

  window.addEventListener("scroll", reveal);

  // Panggil reveal saat halaman pertama kali dimuat
  // untuk memeriksa elemen yang sudah terlihat tanpa scroll
  reveal();
});

function clickEffect(element) {
  element.classList.add("clicked");

  setTimeout(() => {
    element.classList.remove("clicked");
  }, 300); // durasi animasi
}

const certItems = document.querySelectorAll(".cert-item");

certItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.classList.add("hovered");
  });

  item.addEventListener("mouseleave", () => {
    item.classList.remove("hovered");
    item.classList.remove("active");
  });

  item.addEventListener("mousedown", () => {
    item.classList.add("active");
  });

  item.addEventListener("mouseup", () => {
    item.classList.remove("active");
  });
});
