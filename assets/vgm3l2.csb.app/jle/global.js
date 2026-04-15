document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector('[hero="section"]');
  if (!heroSection) return;

  let heroHeight = heroSection.offsetHeight;

  const handleScroll = () => {
    if (window.scrollY > heroHeight) {
      document.body.classList.add("page-scrolled");
    } else {
      document.body.classList.remove("page-scrolled");
    }
  };

  // Recalculate heroHeight on resize
  const handleResize = () => {
    heroHeight = heroSection.offsetHeight;
    handleScroll(); // Re-check scroll position after resize
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);

  // Initial check
  handleScroll();
});

document.querySelectorAll('[dropdown="backbtn"]').forEach((backBtn) => {
  backBtn.addEventListener("click", function () {
    // Find the closest parent menu_dropdown and within it, find the menu_dropdown-toggle
    const dropdownToggle = this.closest('[dropdown="menu"]').querySelector(
      '[dropdown="toggle"]'
    );
    if (dropdownToggle) {
      dropdownToggle.click();
    }
  });
});

const initAccordion = () => {
  const accGroups = document.querySelectorAll("[acc-group]");

  accGroups.forEach((group) => {
    const heads = group.querySelectorAll("[acc-head]");

    heads.forEach((head) => {
      const content = head.nextElementSibling;
      content.style.cssText = "height:0;overflow:hidden;transition:height 0.3s";

      head.addEventListener("click", () => {
        heads.forEach((h) => {
          if (h !== head) {
            h.classList.remove("open");
            h.nextElementSibling.style.height = "0px";
          }
        });

        const isOpen = head.classList.toggle("open");
        content.style.height = isOpen ? content.scrollHeight + "px" : "0px";
      });
    });

    // ✅ Auto-open first item in each group
    heads[0]?.click();
  });
};

// ✅ Run initial accordion
initAccordion();

// ✅ Check for data-w-tab and reinitialize accordion only once per tab click
const allTabs = document.querySelectorAll("[data-w-tab]");
const initializedTabs = new Set();

allTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabName = tab.getAttribute("data-w-tab");

    if (!initializedTabs.has(tabName)) {
      initializedTabs.add(tabName);
      setTimeout(() => {
        initAccordion(); // Re-initialize accordions after tab content loads
      }, 10); // Delay to wait for Webflow to inject tab pane content
    }
  });
});

// const mainwrapper = document.querySelector(".main-wrapper");
// const navdd = document.querySelectorAll(".nav-dd");
// navdd.forEach((dropdown) => {
//   dropdown.addEventListener("mouseleave", () => {
//     setTimeout(() => {
//       mainwrapper.click();
//       console.log("clicked");
//     }, 3000);
//   });
// });
document.querySelectorAll(".nav-dd-menu").forEach((menu) => {
  const navmenubg = menu.querySelector(".nav-dd-bg");

  menu.addEventListener("mouseenter", () => {
    navmenubg.classList.add("open");
  });

  menu.addEventListener("mouseleave", () => {
    navmenubg.classList.remove("open");
  });
});

if (window.innerWidth < 769) {
  document.addEventListener("DOMContentLoaded", function () {
    function addClickListeners() {
      var navMenuLinks = document.querySelectorAll(".navbar .w-nav-menu a");
      var closeButton = document.querySelector("[nav-menu-btn]");

      // Prevent adding duplicate listeners
      navMenuLinks.forEach(function (link) {
        link.removeEventListener("click", handleClick); // remove existing
        link.addEventListener("click", handleClick); // add new
      });

      function handleClick() {
        if (closeButton) closeButton.click();
      }
    }

    addClickListeners();

    // Reattach on resize (optional, in case elements change)
    window.addEventListener("resize", addClickListeners);
  });
}
