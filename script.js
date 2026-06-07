const siteData = {
  bookingUrl:
    "https://reservationsteps.ru/rooms/index/b7187344-e29b-437b-9485-1fd16c170a74",
  address:
    "Республика Карелия, Сортавальский муниципальный округ, посёлок Вуорио, 18",
  phone: "+7 (999) 000-00-00",
  mapEmbedUrl:
    "https://yandex.ru/map-widget/v1/?ll=30.655948%2C61.663496&z=14&pt=30.655948%2C61.663496%2Cpm2rdm&lang=ru_RU",
  reviews: [
    {
      name: "Стас",
      date: "4 февраля 2026",
      rating: 5,
      source: "Яндекс Путешествия",
      text: "Дом шикарный, уютный и есть всё необходимое. Что не мало важно это 2 санузла с душевыми на первом этаже и 1 сан узел на втором этаже, для большой компании очень кстати. Мне кажется, фото не передают красоты участка и самого дома в целом. Что поразило в первую очередь, это чистота в доме, жена нечаянно уронила карандаш за комод в спальной комнате, и, отодвинув его, мы удивились, что там ни пылинки (удивились, так как не первый раз арендуем дома и нигде такой чистоты не встречали), ну и, соответственно, чистота на участке. С владельцем общение приятное, по любому вопросу всегда на связи, также он нам организовал прогулку на катере, которая тоже очень понравилась, и нам очень повезло с капитаном, Степан профессионал своего дела и очень интересно рассказывал про все достопримечательности и историю региона. Буду советовать всем друзьям и знакомым именно этот дом.",
    },
    {
      name: "Алена А.",
      date: "20 июня 2024",
      rating: 5,
      source: "Яндекс Путешествия",
      text: "Шикарное место на берегу озера. Большой просторный дом, есть все необходимое. Были большой семьей- все очень понравилось. Вечерами можно пожарить шашлычок, просто посидеть у костра, наслаждаясь видом. Если нужны водные экскурсии, катер забирает прямо от мостика.",
    },
    {
      name: "Светлана",
      date: "9 сентября 2023",
      rating: 5,
      source: "Яндекс Путешествия",
      text: "Надо ли говорить, что вся семья уже очень скучает по дням, проведенным в этот прекрасном доме. В начале сентября мы отдыхали там трое суток, компанией 6 взрослых. Место невероятной красоты, вот прям дух захватывает! особенно если вы- горожанин и южанин. Дом большой, современный ремонт, всё очень функционально, На пером этаже два с/узла с душевыми, большая кухня со всеми необходимыми для приготовления пищи предметами, стиралка. Большой удобный диван, хороший телевизор с выходом в интернет, два холодильника. одна из спален тоже на первом этаже. На втором- три спальни и с/узел. Лестница удобная, просторная. все спальни просторные, хорошие кровати, подушки, белоснежное бельё и полотенца. Но самое важное и самое ошеломляющее-это вид на залив, огромный двор , яблоневый сад, просто нереальный простор и километры красоты. Прям со двора выход на озеро, уточки плавают, мы катались на сапе, очень удобный заход, спокойно можно купаться. Эсть два лобных места с кострищами. наверху и внизу ,у озера, мангальная зона. Ужинать у костра, любуясь отражением звёзд в озере-волшебно. В общем- место невероятное, мы влюблены. Комфорт, красота, функционал, адектватный хозяин. Рекомендую 100%! До магазина минут 5-7 на машине, магазины на любой вкус, до центра Сортавалы-10 минут. Из минусов-туповатые ножи и шум от трассы( дом стоит прям у дороги), но по факту, это мешало только мне, остальные даже не заметили. Кстати, рядом сплошь лес с грибами и ягодами, волшебным воздухом и невероятным цветом растительности.",
    },
    {
      name: "Андрей",
      date: "30 октября 2024",
      rating: 5,
      source: "Яндекс Путешествия",
      text: "Очень уютный домик. Всё по домашнему! Рекомендую. Чисто, просторно, тепло. Вид из окна прекрасный. Есть место для костра и мангальная зона. В общем 10 из 10!",
    },
    {
      name: "Анатолий",
      date: "6 октября 2025",
      rating: 5,
      source: "Яндекс Путешествия",
      text: 'Чисто, интерьер без излишеств, но уютно, живописное место на берегу. По желанию, через хозяев, можно заказать экскурсию по шхерам и на Валаам. Возможно заказать новинку-"Фурако".',
    },
  ],
};

const selectors = {
  bookingLinks: "[data-booking-link]",
  phoneText: "[data-phone]",
  phoneLinks: "[data-phone-link]",
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
  reviewTrack: "[data-review-track]",
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
  lightGallery: "[data-lightgallery]",
  reveal: "[data-reveal]",
};

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function applyAssetVersions() {
  const versionAsset =
    typeof window.withCacheBustedAsset === "function"
      ? window.withCacheBustedAsset
      : (value) => value;

  const updateAttribute = (node, attributeName, formatter = versionAsset) => {
    const currentValue = node.getAttribute(attributeName);
    const nextValue = formatter(currentValue);

    if (currentValue && nextValue !== currentValue) {
      node.setAttribute(attributeName, nextValue);
    }
  };

  const updateSrcset = (value) => {
    if (!value) {
      return value;
    }

    return value
      .split(",")
      .map((candidate) => {
        const parts = candidate.trim().split(/\s+/);

        if (!parts[0]) {
          return candidate;
        }

        parts[0] = versionAsset(parts[0]);

        return parts.join(" ");
      })
      .join(", ");
  };

  document
    .querySelectorAll(
      "img[src], source[src], video[src], audio[src], iframe[src]",
    )
    .forEach((node) => {
      updateAttribute(node, "src");
    });

  document.querySelectorAll("img[srcset], source[srcset]").forEach((node) => {
    updateAttribute(node, "srcset", updateSrcset);
  });

  document.querySelectorAll("a[href]").forEach((node) => {
    updateAttribute(node, "href");
  });

  document.querySelectorAll("[style]").forEach((node) => {
    const currentValue = node.getAttribute("style");

    if (!currentValue || !currentValue.includes("url(")) {
      return;
    }

    const nextValue = currentValue.replace(
      /url\(\s*(["']?)([^"')]+)\1\s*\)/g,
      (_match, _quote, url) => {
        return `url("${versionAsset(url)}")`;
      },
    );

    if (nextValue !== currentValue) {
      node.setAttribute("style", nextValue);
    }
  });
}

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

function renderReviews() {
  const reviewTrack = document.querySelector(selectors.reviewTrack);

  if (!reviewTrack) {
    return;
  }

  reviewTrack.textContent = "";

  siteData.reviews.forEach((review) => {
    const card = document.createElement("article");
    card.className = "swiper-slide review-card";
    card.setAttribute("data-reveal", "");

    const meta = document.createElement("div");
    meta.className = "review-meta";

    const avatar = document.createElement("span");
    avatar.className = "review-avatar";
    avatar.setAttribute("aria-hidden", "true");
    avatar.textContent = getInitials(review.name);

    const author = document.createElement("div");
    author.className = "review-author";

    const name = document.createElement("span");
    name.className = "review-name";
    name.textContent = review.name;

    const date = document.createElement("span");
    date.className = "review-date";
    date.textContent = review.date;

    const stars = document.createElement("span");
    stars.className = "review-stars";
    stars.setAttribute("aria-label", `${review.rating} из 5`);
    stars.textContent = getStars(review.rating);

    const score = document.createElement("span");
    score.className = "review-score";
    score.textContent = `${review.rating}.0`;

    const rating = document.createElement("div");
    rating.className = "review-rating";
    rating.append(stars, score);

    const source = document.createElement("span");
    source.className = "review-source";
    source.textContent = review.source;

    const body = document.createElement("div");
    body.className = "review-body";

    const text = document.createElement("p");
    text.className = "review-text";
    text.dataset.fullText = review.text;
    text.textContent = review.text;

    body.append(text);

    if (review.text.length > 300) {
      card.classList.add("has-long-review");

      const more = document.createElement("button");
      more.className = "review-more";
      more.type = "button";
      more.textContent = "Читать далее";
      more.addEventListener("click", () => openReviewModal(review));

      body.append(more);
    }

    author.append(name, date);
    meta.append(avatar, author, rating);
    card.append(meta, body, source);
    reviewTrack.append(card);
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

function initLightGallery() {
  const galleryEl = document.querySelector(selectors.lightGallery);
  const lightGallery = window.lightGallery;

  if (!galleryEl || !lightGallery) {
    return;
  }

  lightGallery(galleryEl, {
    selector: "a",
    plugins: [window.lgZoom, window.lgThumbnail].filter(Boolean),
    speed: 420,
    download: false,
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
    if (window.innerWidth > 1000) {
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

applyAssetVersions();
applySiteData();
renderReviews();
initHeroSlides();
initHouseSwiper();
initLightGallery();
initReviewsSwiper();
initReviewModal();
initMobileNav();
initHeaderState();
initReveal();
