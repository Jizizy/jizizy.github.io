"use client";

import { useEffect, useState } from "react";

const whatsappUrl =
  "https://wa.me/4915901316377?text=Hallo%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20vereinbaren.";

export default function Home(): import("react").JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f3ed] text-[#453d37]">

      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/15 bg-black/20 backdrop-blur-[2px]">

        <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">

          {/* LOGO */}

          <a
            href="/"
            onClick={closeMenu}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f7f1e9]/95 shadow-lg backdrop-blur-sm sm:h-16 sm:w-16"
          >
            <img
              src="/logo.png"
              alt="Olessia Wellness"
              className="h-full w-full object-contain"
            />
          </a>


          {/* DESKTOP NAVIGATION */}

          <nav className="hidden items-center gap-6 text-sm md:flex lg:gap-8">

            <a
              href="#ueber-uns"
              className="text-[#fffaf5] drop-shadow-md transition hover:text-[#e6d2bd]"
            >
              Über mich
            </a>

            <a
              href="#massagen"
              className="text-[#fffaf5] drop-shadow-md transition hover:text-[#e6d2bd]"
            >
              Massagen
            </a>

            <a
              href="#preise"
              className="text-[#fffaf5] drop-shadow-md transition hover:text-[#e6d2bd]"
            >
              Preise
            </a>

            <a
              href="#zertifikate"
              className="text-[#fffaf5] drop-shadow-md transition hover:text-[#e6d2bd]"
            >
              Zertifikate
            </a>

            <a
              href="#kontakt"
              className="text-[#fffaf5] drop-shadow-md transition hover:text-[#e6d2bd]"
            >
              Kontakt
            </a>

          </nav>


          {/* DESKTOP BOOKING */}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[#f7f1e9] px-5 py-3 text-sm font-medium text-[#594a40] shadow-lg transition hover:bg-white sm:px-6 md:inline-flex"
          >
            Termin buchen
          </a>


          {/* MOBILE BUTTON */}

          <div className="flex items-center gap-2 md:hidden">

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#f7f1e9] px-4 py-2.5 text-xs font-medium text-[#594a40] shadow-lg"
            >
              Termin buchen
            </a>

            <button
              type="button"
              aria-label="Menü öffnen"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f1e9]/95 text-[#594a40] shadow-lg"
            >
              <span className="relative block h-5 w-5">

                <span
                  className={`absolute left-0 top-1 h-px w-5 bg-current transition ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />

                <span
                  className={`absolute left-0 top-2.5 h-px w-5 bg-current transition ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />

                <span
                  className={`absolute left-0 top-4 h-px w-5 bg-current transition ${
                    menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />

              </span>
            </button>

          </div>

        </div>


        {/* MOBILE MENU */}

        <div
          className={`overflow-hidden bg-[#2E2723]/95 backdrop-blur-md transition-all duration-300 md:hidden ${
            menuOpen
              ? "max-h-[420px] border-t border-white/10 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >

          <nav className="flex flex-col px-6 py-5">

            <a
              href="#ueber-uns"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm text-[#F7F3ED]"
            >
              Über mich
            </a>

            <a
              href="#massagen"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm text-[#F7F3ED]"
            >
              Massagen
            </a>

            <a
              href="#preise"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm text-[#F7F3ED]"
            >
              Preise
            </a>

            <a
              href="#zertifikate"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm text-[#F7F3ED]"
            >
              Zertifikate
            </a>

            <a
              href="#kontakt"
              onClick={closeMenu}
              className="py-4 text-sm text-[#F7F3ED]"
            >
              Kontakt
            </a>

          </nav>

        </div>

      </header>


      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section
        className="relative min-h-[680px] overflow-hidden bg-cover bg-center sm:min-h-[720px]"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 bg-[#4a4039]/10" />


        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-6 pb-16 pt-32 sm:min-h-[720px] sm:py-20 lg:px-10">

          <div className="max-w-3xl text-white">

            <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-white/80 sm:mb-7 sm:text-xs sm:tracking-[0.35em]">
              Massage · Wellness · Wohlbefinden
            </p>

            <h1 className="text-[52px] font-light leading-[0.98] tracking-[-0.04em] sm:text-7xl lg:text-[92px]">

              Zeit für

              <span className="mt-2 block font-serif italic text-[#e6d2bd]">
                dich.
              </span>

            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/90 sm:mt-8 sm:text-lg sm:leading-8">
              Entspannung, Ruhe und bewusste Auszeit vom Alltag.
              Gönnen Sie Ihrem Körper eine wohltuende Massage
              in angenehmer Atmosphäre.
            </p>


            {/* HERO BUTTONS */}

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full bg-[#655346] px-7 py-4 text-sm text-white shadow-lg transition hover:bg-[#514239] sm:px-8"
              >
                Termin buchen
              </a>

              <a
                href="#massagen"
                className="inline-flex justify-center rounded-full border border-white/70 bg-white/10 px-7 py-4 text-sm text-white backdrop-blur-sm transition hover:bg-white hover:text-[#594a40] sm:px-8"
              >
                Massagen entdecken
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* ABOUT */}
      {/* ===================================================== */}

      <section
        id="ueber-uns"
        className="bg-[#F6F0EA] px-6 py-20 sm:py-24 lg:px-10 lg:py-28"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 sm:gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#9a8068]">
                Über mich
              </p>

            </div>


            <div>

              <h2 className="max-w-3xl text-4xl font-light leading-tight tracking-[-0.03em] text-[#4A4039] sm:text-5xl md:text-6xl">

                Ihre persönliche{" "}

                <span className="font-serif italic">
                  Auszeit.
                </span>

              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#756960] sm:mt-8 sm:text-lg sm:leading-8">
                Ich helfe Ihnen gerne dabei, Ihr Wohlbefinden zu steigern,
                indem ich Verspannungen und Muskelblockaden gezielt löse.
                Bei mir erwartet Sie außerdem ein verwöhnendes
                Ganzkörper-Peeling, das Ihrer Haut ein seidig-glattes Gefühl
                verleiht.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* MASSAGES */}
      {/* ===================================================== */}

      <section
        id="massagen"
        className="bg-[#2e2723] px-6 py-20 sm:py-24 lg:px-10 lg:py-28"
      >

        <div className="mx-auto max-w-7xl">

          {/* HEADING */}

          <div className="mb-10 text-center sm:mb-14">

            <p className="text-xs uppercase tracking-[0.35em] text-[#9A8068]">
              Behandlungen
            </p>

            <h2 className="mt-4 text-4xl font-light text-[#F6F0EA] sm:text-5xl">

              Meine{" "}

              <span className="font-serif italic text-[#947963]">
                Massagen
              </span>

            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#D9C9BA] sm:text-base">
              Entdecken Sie meine verschiedenen Behandlungen für Körper,
              Geist und Wohlbefinden.
            </p>

          </div>


          {/* CAROUSEL */}

          <div className="relative">

            <div
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5 sm:gap-6"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >

              {/* 01 */}

              <div className="min-w-[78%] snap-center sm:min-w-[30%] lg:min-w-[22%]">

                <div className="overflow-hidden rounded-[24px] bg-[#FAF7F2] shadow-sm">

                  <img
                    src="/massages/klassische-massage.jpg"
                    alt="Klassische Massage"
                    className="block h-auto w-full"
                  />

                </div>

              </div>


              {/* 02 */}

              <div className="min-w-[78%] snap-center sm:min-w-[30%] lg:min-w-[22%]">

                <div className="overflow-hidden rounded-[24px] bg-[#FAF7F2] shadow-sm">

                  <img
                    src="/massages/hot-stone-massage.jpg"
                    alt="Hot-Stone Massage"
                    className="block h-auto w-full"
                  />

                </div>

              </div>


              {/* 03 */}

              <div className="min-w-[78%] snap-center sm:min-w-[30%] lg:min-w-[22%]">

                <div className="overflow-hidden rounded-[24px] bg-[#FAF7F2] shadow-sm">

                  <img
                    src="/massages/schroepfmassage.jpg"
                    alt="Schröpfmassage"
                    className="block h-auto w-full"
                  />

                </div>

              </div>


              {/* 04 */}

              <div className="min-w-[78%] snap-center sm:min-w-[30%] lg:min-w-[22%]">

                <div className="overflow-hidden rounded-[24px] bg-[#FAF7F2] shadow-sm">

                  <img
                    src="/massages/anticellulitemassage.jpg"
                    alt="Anticellulitemassage"
                    className="block h-auto w-full"
                  />

                </div>

              </div>


              {/* 05 */}

              <div className="min-w-[78%] snap-center sm:min-w-[30%] lg:min-w-[22%]">

                <div className="overflow-hidden rounded-[24px] bg-[#FAF7F2] shadow-sm">

                  <img
                    src="/massages/kosmetische-lymphdrainage.jpg"
                    alt="Kosmetische Lymphdrainage"
                    className="block h-auto w-full"
                  />

                </div>

              </div>


              {/* 06 */}

              <div className="min-w-[78%] snap-center sm:min-w-[30%] lg:min-w-[22%]">

                <div className="overflow-hidden rounded-[24px] bg-[#FAF7F2] shadow-sm">

                  <img
                    src="/massages/fusszonenmassage.jpg"
                    alt="Fußzonenmassage"
                    className="block h-auto w-full"
                  />

                </div>

              </div>


              {/* 07 */}

              <div className="min-w-[78%] snap-center sm:min-w-[30%] lg:min-w-[22%]">

                <div className="overflow-hidden rounded-[24px] bg-[#FAF7F2] shadow-sm">

                  <img
                    src="/massages/gesichtsmassage.jpg"
                    alt="Gesichtsmassage"
                    className="block h-auto w-full"
                  />

                </div>

              </div>


              {/* 08 */}

              <div className="min-w-[78%] snap-center sm:min-w-[30%] lg:min-w-[22%]">

                <div className="overflow-hidden rounded-[24px] bg-[#FAF7F2] shadow-sm">

                  <img
                    src="/massages/sportmassage.jpg"
                    alt="Sportmassage"
                    className="block h-auto w-full"
                  />

                </div>

              </div>


              {/* 09 */}

              <div className="min-w-[78%] snap-center sm:min-w-[30%] lg:min-w-[22%]">

                <div className="overflow-hidden rounded-[24px] bg-[#FAF7F2] shadow-sm">

                  <img
                    src="/massages/rueckenmassage.jpg"
                    alt="Rückenmassage"
                    className="block h-auto w-full"
                  />

                </div>

              </div>


              {/* 10 */}

              <div className="min-w-[78%] snap-center sm:min-w-[30%] lg:min-w-[22%]">

                <div className="overflow-hidden rounded-[24px] bg-[#FAF7F2] shadow-sm">

                  <img
                    src="/massages/ganzkoerperpeeling.jpg"
                    alt="Ganzkörperpeeling"
                    className="block h-auto w-full"
                  />

                </div>

              </div>

            </div>


            <p className="mt-4 text-center text-[10px] uppercase tracking-[0.25em] text-[#9A8068] sm:text-xs">
              ← Wischen oder scrollen →
            </p>

          </div>

        </div>

      </section>


      {/* PRICES */}
<section id="preise" className="bg-[#F6F0EA]">

  <div className="mx-auto max-w-7xl">

    {/* HEADER */}
    <div className="px-6 pb-16 pt-28 text-center lg:px-10">

      <p className="text-xs uppercase tracking-[0.4em] text-[#947963]">
        Wellness & Massage
      </p>

      <h2 className="mt-3 font-serif text-6xl font-light italic leading-none text-[#655346] sm:text-7xl md:text-8xl">
        Preise
      </h2>

      <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#74675D]">
        Entdecken Sie unsere Behandlungen und wählen Sie
        die passende Dauer für Ihre persönliche Auszeit.
      </p>

    </div>


    {/* MOBILE SCROLL CONTAINER */}

    <div className="overflow-x-auto">

      <div className="min-w-[760px] lg:min-w-0">

        {/* PRICE GRID */}

        <div className="grid grid-cols-2">


          {/* ========================================= */}
          {/* 01 — KÖRPER */}
          {/* ========================================= */}

          <div className="bg-[#2E2723] px-8 py-14 text-[#F6F0EA] md:px-14 lg:px-16">

            <div className="mb-12">

              <p className="text-xs uppercase tracking-[0.35em] text-[#D9B898]">
                01
              </p>

              <h3 className="mt-3 font-serif text-4xl font-light italic">
                Körper
              </h3>

            </div>


            {/* Klassische Wellnessmassage */}

            <div className="border-b border-white/20 pb-7">

              <div className="flex items-center justify-between gap-6">

                <h4 className="text-xl font-light">
                  Klassische Wellnessmassage
                </h4>

                <div className="space-y-3 text-right text-sm">

                  <div className="flex justify-between gap-6">

                    <span className="text-[#D9C9BA]">
                      60 Min.
                    </span>

                    <span>
                      50 €
                    </span>

                  </div>

                  <div className="flex justify-between gap-6">

                    <span className="text-[#D9C9BA]">
                      70 Min.
                    </span>

                    <span>
                      60 €
                    </span>

                  </div>

                  <div className="flex justify-between gap-6">

                    <span className="text-[#D9C9BA]">
                      90 Min.
                    </span>

                    <span>
                      75 €
                    </span>

                  </div>

                </div>

              </div>

            </div>


            {/* Rückenmassage */}

            <div className="border-b border-white/20 py-7">

              <div className="flex items-center justify-between gap-6">

                <h4 className="text-xl font-light">
                  Rückenmassage
                </h4>

                <div className="text-right text-sm">

                  <span className="text-[#D9C9BA]">
                    30 Min.
                  </span>

                  <span className="ml-6">
                    30 €
                  </span>

                </div>

              </div>

            </div>


            {/* Fußzonenmassage */}

            <div className="pt-7">

              <div className="flex items-center justify-between gap-6">

                <h4 className="text-xl font-light">
                  Fußzonenmassage
                </h4>

                <div className="text-right text-sm">

                  <span className="text-[#D9C9BA]">
                    30 Min.
                  </span>

                  <span className="ml-6">
                    30 €
                  </span>

                </div>

              </div>

            </div>

          </div>



          {/* ========================================= */}
          {/* 02 — GESICHT */}
          {/* ========================================= */}

          <div className="border border-[#2E2723] bg-[#F6F0EA] px-8 py-14 text-[#4A3831] md:px-14 lg:px-16">

            <div className="mb-12">

              <p className="text-xs uppercase tracking-[0.35em] text-[#947963]">
                02
              </p>

              <h3 className="mt-3 font-serif text-4xl font-light italic text-[#655346]">
                Gesicht
              </h3>

            </div>


            {/* Gesichtsmassage */}

            <div className="border-b border-[#D9CFC3] pb-7">

              <div className="flex items-center justify-between gap-6">

                <h4 className="text-xl font-light">
                  Gesichtsmassage
                </h4>

                <div className="text-right text-sm">

                  <span className="text-[#80654E]">
                    30 Min.
                  </span>

                  <span className="ml-6 font-medium text-[#655346]">
                    30 €
                  </span>

                </div>

              </div>

            </div>

          </div>



          {/* ========================================= */}
          {/* 03 — SPEZIALMASSAGEN */}
          {/* ========================================= */}

          <div className="border border-[#2E2723] bg-[#F6F0EA] px-8 py-14 text-[#4A3831] md:px-14 lg:px-16">

            <div className="mb-12">

              <p className="text-xs uppercase tracking-[0.35em] text-[#947963]">
                03
              </p>

              <h3 className="mt-3 font-serif text-4xl font-light italic text-[#655346]">
                Spezialmassagen
              </h3>

            </div>


            {/* Sportmassage */}

            <div className="border-b border-[#D9CFC3] pb-7">

              <div className="flex items-center justify-between gap-6">

                <h4 className="text-xl font-light">
                  Sportmassage
                </h4>

                <div className="text-right text-sm">

                  <span className="text-[#80654E]">
                    30 Min.
                  </span>

                  <span className="ml-6 font-medium text-[#655346]">
                    30 €
                  </span>

                </div>

              </div>

            </div>


            {/* Anticellulitemassage */}

            <div className="border-b border-[#D9CFC3] py-7">

              <div className="flex items-center justify-between gap-6">

                <h4 className="text-xl font-light">
                  Anticellulitemassage
                </h4>

                <div className="text-right text-sm">

                  <span className="text-[#80654E]">
                    30 Min.
                  </span>

                  <span className="ml-6 font-medium text-[#655346]">
                    30 €
                  </span>

                </div>

              </div>

            </div>


            {/* Kosmetische Lymphdrainage */}

            <div className="pt-7">

              <div className="flex items-start justify-between gap-6">

                <h4 className="text-xl font-light">
                  Kosmetische Lymphdrainage
                </h4>

                <div className="space-y-3 text-right text-sm">

                  <div className="flex justify-between gap-6">

                    <span className="text-[#80654E]">
                      60 Min.
                    </span>

                    <span className="font-medium text-[#655346]">
                      50 €
                    </span>

                  </div>

                  <div className="flex justify-between gap-6">

                    <span className="text-[#80654E]">
                      70 Min.
                    </span>

                    <span className="font-medium text-[#655346]">
                      60 €
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>



          {/* ========================================= */}
          {/* 04 — MASSAGE MIT ETWAS */}
          {/* ========================================= */}

          <div className="bg-[#2E2723] px-8 py-14 text-[#F6F0EA] md:px-14 lg:px-16">

            <div className="mb-12">

              <p className="text-xs uppercase tracking-[0.35em] text-[#D9B898]">
                04
              </p>

              <h3 className="mt-3 font-serif text-4xl font-light italic">
                Massage Mit Etwas
              </h3>

            </div>


            {/* Hot Stone */}

            <div className="border-b border-white/20 pb-7">

              <div className="flex items-center justify-between gap-6">

                <h4 className="text-xl font-light">
                  Hot-Stone-Massage
                </h4>

                <div className="text-right text-sm">

                  <span className="text-[#D9C9BA]">
                    60 Min.
                  </span>

                  <span className="ml-6">
                    50 €
                  </span>

                </div>

              </div>

            </div>


            {/* Schröpfmassage */}

            <div className="pt-7">

              <div className="flex items-start justify-between gap-6">

                <h4 className="text-xl font-light">
                  Schröpfmassage
                </h4>

                <div className="space-y-3 text-right text-sm">

                  <div className="flex justify-between gap-6">

                    <span className="text-[#D9C9BA]">
                      30 Min.
                    </span>

                    <span>
                      30 €
                    </span>

                  </div>

                  <div className="flex justify-between gap-6">

                    <span className="text-[#D9C9BA]">
                      60 Min.
                    </span>

                    <span>
                      50 €
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>



          {/* ========================================= */}
          {/* 05 — WELLNESS & PFLEGE */}
          {/* ========================================= */}

          <div className="bg-[#2E2723] px-8 py-14 text-[#F6F0EA] md:px-14 lg:px-16">

            <div className="mb-12">

              <p className="text-xs uppercase tracking-[0.35em] text-[#D9B898]">
                05
              </p>

              <h3 className="mt-3 font-serif text-4xl font-light italic">
                Wellness & Pflege
              </h3>

            </div>


            {/* Ganzkörperpeeling */}

            <div className="border-b border-white/20 pb-7">

              <div className="flex items-center justify-between gap-6">

                <h4 className="text-xl font-light">
                  Ganzkörperpeeling
                </h4>

                <div className="text-right text-sm">

                  <span className="text-[#D9C9BA]">
                    60 Min.
                  </span>

                  <span className="ml-6">
                    50 €
                  </span>

                </div>

              </div>

            </div>


            <div className="mt-16">

              <p className="max-w-sm text-sm leading-7 text-[#D9C9BA]">
                Zeit für Entspannung, Pflege und
                persönliche Wohlfühlmomente.
              </p>

            </div>

          </div>



          {/* ========================================= */}
          {/* WELLNESS BILD */}
          {/* ========================================= */}

          <div className="relative min-h-[420px] overflow-hidden">

            <img
              src="/images/wellness.jpg"
              alt="Wellness und Entspannung"
              className="absolute inset-0 h-full w-full object-cover"
            />

          </div>


        </div>

      </div>

    </div>


    {/* MOBILE SCROLL HINT */}

    <p className="px-6 py-5 text-center text-[10px] uppercase tracking-[0.25em] text-[#947963] sm:hidden">
      ← Wischen, um den gesamten Preisbereich zu sehen →
    </p>

  </div>

</section>

      {/* ===================================================== */}
      {/* CERTIFICATES */}
      {/* ===================================================== */}

      <section
        id="zertifikate"
        className="bg-[#F6F0EA] px-6 py-20 sm:py-24 lg:px-10 lg:py-28"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">


            {/* LEFT SIDE */}

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#9a8068]">
                Qualifikation
              </p>

              <h2 className="mt-5 text-4xl font-light leading-tight text-[#4a4039] sm:text-5xl">

                Erfahrung &

                <span className="block font-serif italic text-[#947963]">
                  Qualität.
                </span>

              </h2>

            </div>


            {/* CERTIFICATES WINDOW */}

            <div className="rounded-[30px] bg-[#2E2723] p-6 sm:rounded-[35px] sm:p-8 md:p-10">

              <p className="mx-auto max-w-xl text-center text-base leading-7 text-[#D9C9BA] sm:text-lg sm:leading-8">
                Hier finden Sie eine Übersicht meiner Zertifikate.
              </p>


              {/* CERTIFICATES */}

              <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6">


                {/* CERTIFICATE 1 */}

                <div className="overflow-hidden rounded-[20px] bg-[#F6F0EA] shadow-sm sm:rounded-[25px]">

                  <img
                    src="/certificates/zertifikat-1.jpg"
                    alt="Zertifikat Massage"
                    className="h-auto w-full object-contain"
                  />

                </div>


                {/* CERTIFICATE 2 */}

                <div className="overflow-hidden rounded-[20px] bg-[#F6F0EA] shadow-sm sm:rounded-[25px]">

                  <img
                    src="/certificates/zertifikat-2.jpg"
                    alt="Zertifikat Massage"
                    className="h-auto w-full object-contain"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* CONTACT */}
      {/* ===================================================== */}

      <section
        id="kontakt"
        className="px-5 pb-20 sm:px-6 sm:pb-28 lg:px-10"
      >

        <div className="mx-auto max-w-7xl">

          <div className="rounded-[30px] bg-[#2E2723] px-6 py-16 text-center text-white sm:rounded-[45px] sm:px-10 sm:py-20 md:px-16">

            <p className="text-xs uppercase tracking-[0.35em] text-[#D9C9BA]">
              Kontakt
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-light leading-tight sm:mt-6 sm:text-5xl md:text-7xl">

              Zeit für eine

              <span className="block font-serif italic text-[#E2D5C8]">
                Auszeit?
              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#E2D9D1] sm:mt-7 sm:text-base">
              Vereinbaren Sie Ihren persönlichen Termin
              ganz einfach über WhatsApp.
            </p>


            {/* WHATSAPP BUTTON */}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#F7F3ED] px-7 py-4 text-sm text-[#594A40] transition hover:bg-white sm:mt-10 sm:px-9"
            >
              Termin per WhatsApp buchen
            </a>


            {/* CONTACT INFORMATION */}

            <div className="mx-auto mt-12 grid max-w-3xl gap-10 border-t border-white/20 pt-8 text-sm sm:mt-16 sm:pt-10 md:grid-cols-2 md:gap-8">


              {/* ADDRESS & OPENING HOURS */}

              <div>

                {/* OPENING HOURS */}

                <div>

                  <p className="text-[#CBB9A9]">
                    Öffnungszeiten
                  </p>

                  <div className="mt-3 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">

                    <span className="font-light text-[#F7F3ED]">
                      Mo – So
                    </span>

                    <span className="hidden h-px w-8 bg-[#CBB9A9]/50 sm:block"></span>

                    <span className="font-light text-[#F7F3ED]">
                      15:00 – 20:00 Uhr
                    </span>

                  </div>

                </div>


                {/* ADDRESS */}

                <div className="mt-7">

                  <p className="text-[#CBB9A9]">
                    Adresse
                  </p>

                  <p className="mt-3 leading-7">
                    An den Eichen 1A
                    <br />
                    59823 Arnsberg
                  </p>

                </div>

              </div>


              {/* PHONE */}

              <div>

                <p className="text-[#CBB9A9]">
                  Telefon & WhatsApp
                </p>

                <a
                  href="tel:+4915901316377"
                  className="mt-3 inline-block transition hover:text-[#E2D5C8]"
                >
                  +49 159 01316377
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* FOOTER */}
      {/* ===================================================== */}

      <footer className="border-t border-[#DDD4CA] px-6 py-8 sm:py-10 lg:px-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center text-sm text-[#756960] md:flex-row md:text-left">

          <p>
            © {new Date().getFullYear()} Olessia Epp
          </p>

          <div className="flex gap-6 sm:gap-7">

            <a
              href="/impressum"
              className="transition hover:text-[#594636]"
            >
              Impressum
            </a>

            <a
              href="/datenschutz"
              className="transition hover:text-[#594636]"
            >
              Datenschutz
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}