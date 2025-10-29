const langDropdown = document.querySelector('.lang-dropdown');
const langBtn = document.querySelector('.lang-btn');
const langMenu = document.querySelector('.lang-menu');

if (langBtn && langDropdown) {
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
  });



  
  document.addEventListener('click', (e) => {
    if (!langDropdown.contains(e.target)) {
      langDropdown.classList.remove('open');
    }
  });

  const langLinks = document.querySelectorAll('.lang-menu a');
  langLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedLang = link.textContent.trim();
      const shortLang = link.dataset.lang.toUpperCase();
      

      langBtn.innerHTML = `${shortLang} <i class="fa-solid fa-chevron-down"></i>`;
      langDropdown.classList.remove('open');

      console.log(`Language changed to: ${selectedLang}`);
    });
  });
}

