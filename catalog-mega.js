(function () {
  var root = document.getElementById("catalogMega");
  var openBtn = document.getElementById("catalogMegaOpen");
  if (!root || !openBtn) return;

  var mq = window.matchMedia("(min-width: 901px)");

  function isOpen() {
    return !root.hasAttribute("hidden");
  }

  function setOpen(open) {
    if (open) {
      root.removeAttribute("hidden");
      root.setAttribute("aria-hidden", "false");
      openBtn.setAttribute("aria-expanded", "true");
      document.body.classList.add("catalog-mega-open");
    } else {
      root.setAttribute("hidden", "");
      root.setAttribute("aria-hidden", "true");
      openBtn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("catalog-mega-open");
    }
  }

  function toggle() {
    setOpen(!isOpen());
  }

  openBtn.addEventListener("click", function (e) {
    if (mq.matches) {
      e.preventDefault();
      toggle();
    }
  });

  var catalogLabel = document.querySelector(".nav__link--catalog .nav__catalog-text");
  if (catalogLabel) {
    catalogLabel.addEventListener("click", function () {
      if (mq.matches) {
        setOpen(false);
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen()) {
      setOpen(false);
    }
  });

  function onMqChange() {
    if (!mq.matches) {
      setOpen(false);
    }
  }

  if (typeof mq.addEventListener === "function") {
    mq.addEventListener("change", onMqChange);
  } else if (typeof mq.addListener === "function") {
    mq.addListener(onMqChange);
  }

  document.querySelectorAll(".nav > .nav__link:not(.nav__link--catalog)").forEach(function (link) {
    link.addEventListener("click", function () {
      if (mq.matches) {
        setOpen(false);
      }
    });
  });
})();
