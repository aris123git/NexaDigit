(function () {
  var body = document.body;
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  var subBtn = document.querySelector('.nav-sub-btn');
  var subItem = document.querySelector('.has-sub');

  function closeNav() {
    body.classList.remove('nav-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    if (subItem) subItem.classList.remove('open');
    if (subBtn) subBtn.setAttribute('aria-expanded', 'false');
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (!open && subItem) {
        subItem.classList.remove('open');
        if (subBtn) subBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var backdrop = document.querySelector('.nav-backdrop');
  if (backdrop) backdrop.addEventListener('click', closeNav);

  if (subBtn && subItem) {
    subBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var open = !subItem.classList.contains('open');
      subItem.classList.toggle('open', open);
      subBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  document.addEventListener('click', function (e) {
    if (subItem && !subItem.contains(e.target)) {
      subItem.classList.remove('open');
      if (subBtn) subBtn.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  menu && menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.matchMedia('(max-width: 980px)').matches) closeNav();
    });
  });
})();
