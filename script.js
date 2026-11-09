const siteData = {
  bookingUrl:
    "https://reservationsteps.ru/rooms/index/b7187344-e29b-437b-9485-1fd16c170a74",
  address:
    "Республика Карелия, Сортавальский муниципальный округ, посёлок Вуорио, 18",
  phone: "+7 (921) 524-68-70",
  secondaryPhone: "+7 (911) 432-31-40",
  email: "xutor.vuorio@inbox.ru",
  mapEmbedUrl:
    "https://yandex.ru/map-widget/v1/?ll=30.655948%2C61.663496&z=14&pt=30.655948%2C61.663496%2Cpm2rdm&lang=ru_RU",
};

const selectors = {
  bookingLinks: "[data-booking-link]",
  phoneText: "[data-phone]",
  phoneLinks: "[data-phone-link]",
  secondaryPhoneText: "[data-secondary-phone]",
  secondaryPhoneLinks: "[data-secondary-phone-link]",
  emailText: "[data-email]",
  emailLinks: "[data-email-link]",
  address: "[data-address]",
  year: "[data-year]",
  mapFrame: "[data-map-frame]",
  navToggle: "[data-nav-toggle]",
  nav: "[data-nav]",
  header: "[data-header]",
  hero: ".hero",
  reviewSwiper: "[data-reviews-swiper]",
  reviewCards: "[data-review-card]",
  reviewMore: "[data-review-more]",
  reviewPrev: "[data-review-prev]",
  reviewNext: "[data-review-next]",
  reviewModal: "[data-review-modal]",
  reviewClose: "[data-review-close]",
  reviewModalAvatar: "[data-review-modal-avatar]",
  reviewModalName: "[data-review-modal-name]",
  reviewModalDate: "[data-review-modal-date]",
  reviewModalStars: "[data-review-modal-stars]",
  reviewModalScore: "[data-review-modal-score]",
  reviewModalText: "[data-review-modal-text]",
  reviewModalSource: "[data-review-modal-source]",
  heroSlides: "[data-hero-slide]",
  houseSwiper: "[data-house-swiper]",
  houseThumbs: "[data-house-thumbs]",
  lightGalleries: "[data-lightgallery]",
  achievementsGallery: "[data-achievements-gallery]",
  achievementItems: "[data-achievement-item]",
  reveal: "[data-reveal]",
};

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function applySiteData() {
  document.querySelectorAll(selectors.bookingLinks).forEach((link) => {
    link.href = siteData.bookingUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  document.querySelectorAll(selectors.phoneText).forEach((node) => {
    node.textContent = siteData.phone;
  });

  document.querySelectorAll(selectors.phoneLinks).forEach((link) => {
    link.href = `tel:${siteData.phone.replace(/[^\d+]/g, "")}`;
  });

  document.querySelectorAll(selectors.secondaryPhoneText).forEach((node) => {
    node.textContent = siteData.secondaryPhone;
  });

  document.querySelectorAll(selectors.secondaryPhoneLinks).forEach((link) => {
    link.href = `tel:${siteData.secondaryPhone.replace(/[^\d+]/g, "")}`;
  });

  document.querySelectorAll(selectors.emailText).forEach((node) => {
    node.textContent = siteData.email;
  });

  document.querySelectorAll(selectors.emailLinks).forEach((link) => {
    link.href = `mailto:${siteData.email}`;
  });

  document.querySelectorAll(selectors.address).forEach((node) => {
    node.textContent = siteData.address;
  });

  const yearNode = document.querySelector(selectors.year);
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  const mapFrame = document.querySelector(selectors.mapFrame);
  if (mapFrame && siteData.mapEmbedUrl.trim()) {
    mapFrame.src = siteData.mapEmbedUrl;
  }
}

// Отзывы лежат в index.html, чтобы их видели поисковики; JS только открывает длинные в модальном окне.
function getReviewFromCard(card) {
  const readText = (selector) =>
    card.querySelector(selector)?.textContent.trim() || "";

  return {
    name: readText(".review-name"),
    date: readText(".review-date"),
    rating: Number(card.dataset.rating) || 5,
    source: readText(".review-source"),
    text: readText(".review-text"),
  };
}

function initReviewCards() {
  document.querySelectorAll(selectors.reviewCards).forEach((card) => {
    const moreButton = card.querySelector(selectors.reviewMore);

    if (!moreButton) {
      return;
    }

    moreButton.addEventListener("click", () => {
      openReviewModal(getReviewFromCard(card));
    });
  });
}

function getInitials(name) {
  const initials = name
    .replace(/[^A-Za-zА-Яа-яЁё\s]/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return initials || "Г";
}

function getStars(rating) {
  const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));
  return "★★★★★".slice(0, safeRating) + "☆☆☆☆☆".slice(0, 5 - safeRating);
}

function initReviewsSwiper() {
  const reviewSwiperEl = document.querySelector(selectors.reviewSwiper);
  const prevButton = document.querySelector(selectors.reviewPrev);
  const nextButton = document.querySelector(selectors.reviewNext);
  const SwiperInstance = window.Swiper;

  if (!reviewSwiperEl || !SwiperInstance) {
    return;
  }

  const reviewsSwiper = new SwiperInstance(reviewSwiperEl, {
    speed: 700,
    spaceBetween: 16,
    slidesPerView: 1,
    rewind: true,
    watchOverflow: true,
    navigation:
      prevButton && nextButton
        ? {
            prevEl: prevButton,
            nextEl: nextButton,
          }
        : false,
    autoplay: prefersReducedMotion
      ? false
      : {
          delay: 15000,
          disableOnInteraction: true,
        },
    breakpoints: {
      720: {
        slidesPerView: 2,
      },
      1080: {
        slidesPerView: 3,
      },
    },
  });

  const stopAutoplay = () => {
    if (reviewsSwiper.autoplay && reviewsSwiper.autoplay.running) {
      reviewsSwiper.autoplay.stop();
    }
  };

  [reviewSwiperEl, prevButton, nextButton].filter(Boolean).forEach((node) => {
    node.addEventListener("pointerdown", stopAutoplay);
    node.addEventListener("keydown", stopAutoplay);
    node.addEventListener("wheel", stopAutoplay, { passive: true });
  });
}

function openReviewModal(review) {
  const modal = document.querySelector(selectors.reviewModal);

  if (!modal) {
    return;
  }

  const avatar = document.querySelector(selectors.reviewModalAvatar);
  const name = document.querySelector(selectors.reviewModalName);
  const date = document.querySelector(selectors.reviewModalDate);
  const stars = document.querySelector(selectors.reviewModalStars);
  const score = document.querySelector(selectors.reviewModalScore);
  const text = document.querySelector(selectors.reviewModalText);
  const source = document.querySelector(selectors.reviewModalSource);

  if (avatar) {
    avatar.textContent = getInitials(review.name);
  }

  if (name) {
    name.textContent = review.name;
  }

  if (date) {
    date.textContent = review.date;
  }

  if (stars) {
    stars.textContent = getStars(review.rating);
    stars.setAttribute("aria-label", `${review.rating} из 5`);
  }

  if (score) {
    score.textContent = `${review.rating}.0`;
  }

  if (text) {
    text.textContent = review.text;
  }

  if (source) {
    source.textContent = review.source;
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  const closeButton = modal.querySelector(".review-modal-close");
  closeButton?.focus();
}

function closeReviewModal() {
  const modal = document.querySelector(selectors.reviewModal);

  if (!modal) {
    return;
  }

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function initReviewModal() {
  const modal = document.querySelector(selectors.reviewModal);

  if (!modal) {
    return;
  }

  document.querySelectorAll(selectors.reviewClose).forEach((button) => {
    button.addEventListener("click", closeReviewModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeReviewModal();
    }
  });
}

function initHeroSlides() {
  const slides = Array.from(document.querySelectorAll(selectors.heroSlides));

  if (slides.length < 2) {
    return;
  }

  slides.forEach((slide, index) => {
    slide.classList.toggle("is-active", index === 0);
  });

  if (prefersReducedMotion) {
    return;
  }

  let activeIndex = 0;

  window.setInterval(() => {
    slides[activeIndex].classList.remove("is-active");
    activeIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.add("is-active");
  }, 4600);
}

function initHouseSwiper() {
  const mainEl = document.querySelector(selectors.houseSwiper);
  const thumbsEl = document.querySelector(selectors.houseThumbs);
  const SwiperInstance = window.Swiper;
  const prevEl = mainEl?.querySelector("[data-house-prev]");
  const nextEl = mainEl?.querySelector("[data-house-next]");

  if (!mainEl || !thumbsEl || !SwiperInstance || !prevEl || !nextEl) {
    return;
  }

  const thumbsSwiper = new SwiperInstance(thumbsEl, {
    slidesPerView: 5,
    spaceBetween: 12,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        slidesPerView: 4,
      },
      561: {
        slidesPerView: 5,
      },
    },
  });

  const mainSwiper = new SwiperInstance(mainEl, {
    speed: 850,
    effect: "fade",
    rewind: true,
    navigation: {
      prevEl,
      nextEl,
    },
    autoplay: prefersReducedMotion
      ? false
      : {
          delay: 3600,
          disableOnInteraction: true,
        },
    thumbs: {
      swiper: thumbsSwiper,
    },
  });

  const stopAutoplay = () => {
    if (mainSwiper.autoplay && mainSwiper.autoplay.running) {
      mainSwiper.autoplay.stop();
    }
  };

  mainSwiper.on("touchStart", stopAutoplay);
  mainSwiper.on("sliderFirstMove", stopAutoplay);
  prevEl.addEventListener("click", stopAutoplay);
  nextEl.addEventListener("click", stopAutoplay);

  thumbsEl.querySelectorAll("[data-slide-index]").forEach((thumb) => {
    const index = Number(thumb.getAttribute("data-slide-index"));

    const activate = () => {
      mainSwiper.slideTo(index);
      stopAutoplay();
    };

    thumb.addEventListener("mouseenter", activate);
    thumb.addEventListener("focusin", activate);
    thumb.addEventListener("click", activate);
  });
}

function prepareAchievementsGallery() {
  const galleryEl = document.querySelector(selectors.achievementsGallery);

  if (!galleryEl) {
    return;
  }

  const items = Array.from(
    galleryEl.querySelectorAll(selectors.achievementItems),
  );
  const visibleItemCount = 3;

  items.forEach((item, index) => {
    const isHidden = index >= visibleItemCount;

    item.classList.toggle("achievement-card-hidden", isHidden);

    if (isHidden) {
      item.tabIndex = -1;
      item.setAttribute("aria-hidden", "true");
    }
  });

  if (items.length <= visibleItemCount) {
    return;
  }

  const moreCard = items[visibleItemCount - 1];
  const moreContent = document.createElement("span");

  moreCard.classList.add("achievement-card-more");
  moreCard.setAttribute(
    "aria-label",
    `Смотреть все фотографии достижений: ${items.length} фото`,
  );
  moreContent.className = "achievement-more-content";
  moreContent.setAttribute("aria-hidden", "true");
  moreContent.innerHTML = `
    <span class="achievement-more-count">${items.length} фото</span>
    <span class="achievement-more-title">Смотреть все фото</span>
  `;
  moreCard.append(moreContent);
}

function initLightGallery() {
  const galleryEls = document.querySelectorAll(selectors.lightGalleries);
  const lightGallery = window.lightGallery;

  if (!galleryEls.length || !lightGallery) {
    return;
  }

  // lightGallery с миниатюрами при инициализации сразу грузит все превью,
  // поэтому создаём его только при первом клике по фото.
  galleryEls.forEach((galleryEl) => {
    const isAchievementsGallery = galleryEl.matches(
      selectors.achievementsGallery,
    );
    let galleryInstance = null;

    galleryEl.addEventListener("click", (event) => {
      if (galleryInstance) {
        return;
      }

      const item = event.target.closest("a");

      if (!item || !galleryEl.contains(item)) {
        return;
      }

      event.preventDefault();
      galleryInstance = createLightGallery(galleryEl, isAchievementsGallery);

      const items = Array.from(galleryEl.querySelectorAll("a"));
      galleryInstance.openGallery(Math.max(0, items.indexOf(item)));
    });
  });
}

function createLightGallery(galleryEl, isAchievementsGallery) {
  return window.lightGallery(galleryEl, {
    selector: "a",
    plugins: [window.lgZoom, window.lgThumbnail].filter(Boolean),
    speed: 420,
    download: false,
    getCaptionFromTitleOrAlt: !isAchievementsGallery,
    thumbnail: true,
    animateThumb: true,
    thumbWidth: 96,
    thumbHeight: "72px",
    mobileSettings: {
      controls: true,
      showCloseIcon: true,
      download: false,
    },
  });
}

function initMobileNav() {
  const toggle = document.querySelector(selectors.navToggle);
  const nav = document.querySelector(selectors.nav);
  const header = document.querySelector(selectors.header);

  if (!toggle || !nav || !header) {
    return;
  }

  const closeNav = () => {
    nav.classList.remove("is-open");
    toggle.classList.remove("is-open");
    header.classList.remove("is-menu-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    header.classList.toggle("is-menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1100) {
      closeNav();
    }
  });
}

function initHeaderState() {
  const header = document.querySelector(selectors.header);
  const hero = document.querySelector(selectors.hero);

  if (!header || !hero) {
    return;
  }

  const syncHeader = () => {
    const heroBottom = hero.getBoundingClientRect().bottom;
    const showBooking = heroBottom <= header.offsetHeight + 24;

    header.classList.toggle("is-scrolled", window.scrollY > 20);
    header.classList.toggle("show-booking", showBooking);
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
  window.addEventListener("resize", syncHeader);
}

function initReveal() {
  const revealNodes = Array.from(document.querySelectorAll(selectors.reveal));

  if (!revealNodes.length) {
    return;
  }

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -6% 0px",
    },
  );

  revealNodes.forEach((node) => observer.observe(node));
}

applySiteData();
initReviewCards();
initHeroSlides();
initHouseSwiper();
prepareAchievementsGallery();
initLightGallery();
initReviewsSwiper();
initReviewModal();
initMobileNav();
initHeaderState();
initReveal();
