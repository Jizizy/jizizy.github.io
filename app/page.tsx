"use client";

import { useEffect, useState } from "react";

const whatsappUrl =
  "https://wa.me/4915901316377?text=Hallo%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20vereinbaren.";

export default function Home(): import("react").JSX.Element {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <main className="min-h-screen bg-[#f7f3ed] text-[#453d37]">

      {/* HEADER */}

<header className="fixed left-0 top-0 z-50 w-full border-b border-white/15 bg-black/20 backdrop-blur-[2px]">

  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

    {/* LOGO */}

    <a
      href="/"
      className="flex h-18 w-18 items-center justify-center rounded-full bg-[#f7f1e9]/95 shadow-lg backdrop-blur-sm"
    >
      <img
        src="/logo.png"
        alt="Olessia Wellness"
        className="h-18 w-18 object-contain"
      />
    </a>


    {/* NAVIGATION */}

    <nav className="hidden items-center gap-8 text-sm md:flex">

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


    {/* BOOKING BUTTON */}

    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-[#f7f1e9] px-6 py-3 text-sm font-medium text-[#594a40] shadow-lg transition hover:bg-white"
    >
      Termin buchen
    </a>

  </div>

</header>

      {/* HERO */}

      <section
        className="relative min-h-[720px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >

        {/* Затемнение фотографии */}

        <div className="absolute inset-0 bg-black/30" />

        {/* Дополнительный светлый оттенок */}

        <div className="absolute inset-0 bg-[#4a4039]/10" />


        {/* Контент */}

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-20 lg:px-10">

          <div className="max-w-3xl text-white">

            <p className="mb-7 text-xs uppercase tracking-[0.35em] text-white/80">
              Massage · Wellness · Wohlbefinden
            </p>

            <h1 className="text-6xl font-light leading-[0.98] tracking-[-0.04em] sm:text-7xl lg:text-[92px]">

              Zeit für

              <span className="mt-2 block font-serif italic text-[#e6d2bd]">
                dich.
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/90">
              Entspannung, Ruhe und bewusste Auszeit vom Alltag.
              Gönnen Sie Ihrem Körper eine wohltuende Massage
              in angenehmer Atmosphäre.
            </p>


            {/* BUTTONS */}

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#655346] px-8 py-4 text-sm text-white shadow-lg transition hover:bg-[#514239]"
              >
                Termin buchen
              </a>

              <a
                href="#massagen"
                className="rounded-full border border-white/70 bg-white/10 px-8 py-4 text-sm text-white backdrop-blur-sm transition hover:bg-white hover:text-[#594a40]"
              >
                Massagen entdecken
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section id="ueber-uns" className="bg-[#bfae9] px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">

          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#9a8068]">
                Über mich
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl text-5xl font-light leading-tight tracking-[-0.03em] text-[] md:text-6xl">
  Ihre persönliche{" "}
  <span className="font-serif italic">
    Auszeit.
  </span>
</h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#756960]">
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


      {/* MASSAGES */}
<section
  id="massagen"
  className="bg-[#2e2723] px-6 py-28 lg:px-10"
>
  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mb-14 text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-[#9A8068]">
        Behandlungen
      </p>

      <h2 className="mt-4 text-4xl font-light text-[#4A3831] md:text-5xl">
        Meine{" "}
        <span className="font-serif italic text-[#947963]">
          Massagen
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-[#74675D]">
        Entdecken Sie meine verschiedenen Behandlungen für Körper,
        Geist und Wohlbefinden.
      </p>
    </div>

    {/* Carousel */}
    <div className="relative">

      <div
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >

        {/* 01 — Klassische Massage */}
        <div className="min-w-[52%] snap-center sm:min-w-[30%] lg:min-w-[22%]">
          <div className="overflow-hidden rounded-[24px] bg-[#FAF7F2] shadow-sm">
            <img
              src="/massages/klassische-massage.jpg"
              alt="Klassische Massage"
              className="block h-auto w-full"
            />
          </div>
        </div>

        {/* 02 — Hot-Stone Massage */}
        <div className="min-w-[52%] snap-center sm:min-w-[30%] lg:min-w-[22%]">
          <div className="overflow-hidden rounded-[24px] bg-[#FAF7F2] shadow-sm">
            <img
              src="/massages/hot-stone-massage.jpg"
              alt="Hot-Stone Massage"
              className="block h-auto w-full"
            />
          </div>
        </div>

        {/* 03 — Schröpfmassage */}
        <div className="min-w-[52%] snap-center sm:min-w-[30%] lg:min-w-[22%]">
          <div className="overflow-hidden rounded-[24px] bg-[#FAF7F2] shadow-sm">
            <img
              src="/massages/schroepfmassage.jpg"
              alt="Schröpfmassage"
              className="block h-auto w-full"
            />
          </div>
        </div>

        {/* 04 — Anticellulitemassage */}
        <div className="min-w-[52%] snap-center sm:min-w-[30%] lg:min-w-[22%]">
          <div className="overflow-hidden rounded-[24px] bg-[#FAF7F2] shadow-sm">
            <img
              src="/massages/anticellulitemassage.jpg"
              alt="Anticellulitemassage"
              className="block h-auto w-full"
            />
          </div>
        </div>

        {/* 05 — Kosmetische Lymphdrainage */}
        <div className="min-w-[52%] snap-center sm:min-w-[30%] lg:min-w-[22%]">
          <div className="overflow-hidden rounded-[24px] bg-[#FAF7F2] shadow-sm">
            <img
              src="/massages/kosmetische-lymphdrainage.jpg"
              alt="Kosmetische Lymphdrainage"
              className="block h-auto w-full"
            />
          </div>
        </div>

        {/* 06 — Fußzonenmassage */}
        <div className="min-w-[52%] snap-center sm:min-w-[30%] lg:min-w-[22%]">
          <div className="overflow-hidden rounded-[24px] bg-[#FAF7F2] shadow-sm">
            <img
              src="/massages/fusszonenmassage.jpg"
              alt="Fußzonenmassage"
              className="block h-auto w-full"
            />
          </div>
        </div>

        {/* 07 — Gesichtsmassage */}
        <div className="min-w-[52%] snap-center sm:min-w-[30%] lg:min-w-[22%]">
          <div className="overflow-hidden rounded-[24px] bg-[#FAF7F2] shadow-sm">
            <img
              src="/massages/gesichtsmassage.jpg"
              alt="Gesichtsmassage"
              className="block h-auto w-full"
            />
          </div>
        </div>

        {/* 08 — Sportmassage */}
        <div className="min-w-[52%] snap-center sm:min-w-[30%] lg:min-w-[22%]">
          <div className="overflow-hidden rounded-[24px] bg-[#FAF7F2] shadow-sm">
            <img
              src="/massages/sportmassage.jpg"
              alt="Sportmassage"
              className="block h-auto w-full"
            />
          </div>
        </div>

        {/* 09 — Rückenmassage */}
        <div className="min-w-[52%] snap-center sm:min-w-[30%] lg:min-w-[22%]">
          <div className="overflow-hidden rounded-[24px] bg-[#FAF7F2] shadow-sm">
            <img
              src="/massages/rueckenmassage.jpg"
              alt="Rückenmassage"
              className="block h-auto w-full"
            />
          </div>
        </div>

        {/* 10 — Ganzkörperpeeling */}
        <div className="min-w-[52%] snap-center sm:min-w-[30%] lg:min-w-[22%]">
          <div className="overflow-hidden rounded-[24px] bg-[#FAF7F2] shadow-sm">
            <img
              src="/massages/ganzkoerperpeeling.jpg"
              alt="Ganzkörperpeeling"
              className="block h-auto w-full"
            />
          </div>
        </div>

      </div>

      {/* Scroll hint */}
      <p className="mt-5 text-center text-xs uppercase tracking-[0.25em] text-[#9A8068]">
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

      <h2 className="mt-3 font-serif text-7xl font-light italic leading-none text-[#655346] md:text-8xl">
        Preise
      </h2>

      <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#74675D]">
        Entdecken Sie unsere Behandlungen und wählen Sie
        die passende Dauer für Ihre persönliche Auszeit.
      </p>

    </div>


    {/* PRICE GRID */}
    <div className="grid lg:grid-cols-2">


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

</section>

 {/* CERTIFICATES */}

<section
  id="zertifikate"
  className="bg-[#F6F0EA] px-6 py-28 lg:px-10"
>

  <div className="mx-auto max-w-7xl">

    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">


      {/* LEFT SIDE */}

      <div>

        <p className="text-xs uppercase tracking-[0.35em] text-[#9a8068]">
          Qualifikation
        </p>

        <h2 className="mt-5 text-5xl font-light leading-tight text-[#4a4039]">
          Erfahrung &

          <span className="block font-serif italic text-[#947963]">
            Qualität.
          </span>
        </h2>

      </div>


      {/* CERTIFICATES WINDOW */}

<div className="rounded-[35px] bg-[#2E2723] p-8 md:p-10">

  <p className="mx-auto max-w-xl text-center text-lg leading-8 text-[#D9C9BA]">
    Hier finden Sie eine Übersicht meiner Zertifikate.
  </p>


  {/* ZERTIFIKATE */}

        <div className="mt-10 grid gap-6 sm:grid-cols-2">


          {/* Zertifikat 1 */}

          <div className="overflow-hidden rounded-[25px] bg-[#F6F0EA] shadow-sm">

            <img
              src="/certificates/zertifikat-1.jpg"
              alt="Zertifikat Massage"
              className="h-auto w-full object-contain"
            />

           

          </div>


          {/* Zertifikat 2 */}

          <div className="overflow-hidden rounded-[25px] bg-[#F6F0EA] shadow-sm">

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

 {/* CONTACT */}

<section id="kontakt" className="px-6 pb-28 lg:px-10">

  <div className="mx-auto max-w-7xl">

    <div className="rounded-[45px] bg-[#2E2723] px-8 py-20 text-center text-white md:px-16">

      <p className="text-xs uppercase tracking-[0.35em] text-[#D9C9BA]">
        Kontakt
      </p>

      <h2 className="mx-auto mt-6 max-w-3xl text-5xl font-light leading-tight md:text-7xl">
        Zeit für eine

        <span className="block font-serif italic text-[#E2D5C8]">
          Auszeit?
        </span>
      </h2>

      <p className="mx-auto mt-7 max-w-xl leading-7 text-[#E2D9D1]">
        Vereinbaren Sie Ihren persönlichen Termin
        ganz einfach über WhatsApp.
      </p>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex rounded-full bg-[#F7F3ED] px-9 py-4 text-sm text-[#594A40] transition hover:bg-white"
      >
        Termin per WhatsApp buchen
      </a>


      {/* CONTACT INFORMATION */}

      <div className="mx-auto mt-16 grid max-w-3xl gap-8 border-t border-white/20 pt-10 text-sm md:grid-cols-2">


        {/* ADRESSE & ÖFFNUNGSZEITEN */}

        <div>

          {/* ÖFFNUNGSZEITEN */}

          <div>

            <p className="text-[#CBB9A9]">
              Öffnungszeiten
            </p>

            <div className="mt-3 flex items-center justify-center gap-4">

              <span className="font-light text-[#F7F3ED]">
                Mo – So
              </span>

              <span className="h-px w-8 bg-[#CBB9A9]/50"></span>

              <span className="font-light text-[#F7F3ED]">
                15:00 – 20:00 Uhr
              </span>

            </div>

          </div>


          {/* ADRESSE */}

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


        {/* TELEFON & WHATSAPP */}

        <div>

          <p className="text-[#CBB9A9]">
            Telefon & WhatsApp
          </p>

          <p className="mt-3">
            +49 159 01316377
          </p>

        </div>

      </div>

    </div>

  </div>

</section>


{/* FOOTER */}

<footer className="border-t border-[#DDD4CA] px-6 py-10 lg:px-10">

  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-sm text-[#756960] md:flex-row">

    <p>
      © {new Date().getFullYear()} Olessia Epp
    </p>

    <div className="flex gap-7">

      <a
        href="/impressum"
        className="hover:text-[#594636]"
      >
        Impressum
      </a>

      <a
        href="/datenschutz"
        className="hover:text-[#594636]"
      >
        Datenschutz
      </a>

    </div>

  </div>

</footer>


</main>

);

}