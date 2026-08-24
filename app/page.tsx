const whatsappUrl =
  "https://wa.me/4915901316377?text=Hallo%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20vereinbaren.";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ed] text-[#453d37]">

      {/* HEADER */}
      <header className="absolute left-0 top-0 z-50 w-full border-b border-white/15 bg-black/10 backdrop-blur-[2px]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

          {/* LOGO */}
          <a
            href="/"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f7f1e9]/95 shadow-lg backdrop-blur-sm"
          >
            <img
              src="/logo.png"
              alt="Olessia Wellness"
              className="h-16 w-16 object-contain"
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
      <section id="ueber-uns" className="bg-[#eae1d7]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">

          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#9a8068]">
                Über mich
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl text-5xl font-light leading-tight tracking-[-0.03em] text-[#4a4039] md:text-6xl">
                Ihre persönliche
                <span className="font-serif italic text-[#947963]">
                  {" "}Auszeit.
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


      {/* MASSAGEN */}
      <section id="massagen" className="bg-[#f7f2eb] px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#96765c]">
              Meine Behandlungen
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
              Meine Massagen
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[#74675d]">
              Entdecken Sie unsere verschiedenen Behandlungen für
              Entspannung, Wohlbefinden und neue Energie.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "Klassische Massage",
                text: "Wohltuende Massage zur Entspannung und Lockerung der Muskulatur.",
              },
              {
                title: "Hot-Stone Massage",
                text: "Entspannung mit warmen Steinen für Körper und Geist.",
              },
              {
                title: "Schröpfmassage",
                text: "Traditionelle Behandlung zur Lockerung und Aktivierung des Gewebes.",
              },
              {
                title: "Anticellulitemassage",
                text: "Gezielte Massage zur Unterstützung der Haut und des Bindegewebes.",
              },
              {
                title: "Kosmetische Lymphdrainage",
                text: "Sanfte Behandlung zur Förderung des Wohlbefindens und der Entspannung.",
              },
              {
                title: "Fußzonenmassage",
                text: "Wohltuende Massage der Fußzonen für tiefe Entspannung.",
              },
              {
                title: "Gesichtsmassage",
                text: "Sanfte Massage für Gesicht, Kopf und Nacken.",
              },
              {
                title: "Sportmassage",
                text: "Kräftige Massage zur Entspannung beanspruchter Muskulatur.",
              },
              {
                title: "Rückenmassage",
                text: "Gezielte Behandlung für Rücken, Schultern und Nacken.",
              },
              {
                title: "Ganzkörpermassage",
                text: "Eine wohltuende Auszeit für den gesamten Körper.",
              },
              {
                title: "Ganzkörperpeeling",
                text: "Pflegendes Peeling für ein geschmeidiges und gepflegtes Hautgefühl.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="group rounded-[28px] border border-[#ded3c7] bg-[#faf7f2] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#e4d7c9] text-[#80654e] transition group-hover:bg-[#6f5845] group-hover:text-white">
                  ✦
                </div>

                <h3 className="text-2xl font-light text-[#3d342d]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-[#74675d]">
                  {item.text}
                </p>

              </article>
            ))}

          </div>
        </div>
      </section>


      {/* PRICES */}
      <section id="preise" className="bg-[#eee6dc]">
        <div className="mx-auto max-w-5xl px-6 py-24">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[0.25em] text-[#96765c]">
              Preisliste
            </p>

            <h2 className="mt-4 text-3xl font-light md:text-4xl">
              Meine Preise
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[#74675d]">
              Wählen Sie die passende Behandlung und Dauer.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2">

            {/* Rückenmassage */}
            <div className="rounded-[28px] bg-[#faf7f2] p-7 shadow-sm">

              <h3 className="text-2xl font-light">
                Rückenmassage
              </h3>

              <div className="mt-5 space-y-3 text-[#74675d]">

                <div className="flex justify-between border-b border-[#d9cfc3] pb-3">
                  <span>30 Min.</span>
                  <span className="font-medium text-[#80654e]">
                    30 €
                  </span>
                </div>

              </div>
            </div>


            {/* Ganzkörpermassage */}
            <div className="rounded-[28px] bg-[#faf7f2] p-7 shadow-sm">

              <h3 className="text-2xl font-light">
                Ganzkörpermassage
              </h3>

              <div className="mt-5 space-y-3 text-[#74675d]">

                <div className="flex justify-between border-b border-[#d9cfc3] pb-3">
                  <span>60 Min.</span>
                  <span className="font-medium text-[#80654e]">
                    50 €
                  </span>
                </div>

                <div className="flex justify-between border-b border-[#d9cfc3] pb-3">
                  <span>75 Min.</span>
                  <span className="font-medium text-[#80654e]">
                    60 €
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>90 Min.</span>
                  <span className="font-medium text-[#80654e]">
                    75 €
                  </span>
                </div>

              </div>
            </div>


            {/* Ganzkörperpeeling */}
            <div className="rounded-[28px] bg-[#faf7f2] p-7 shadow-sm">

              <h3 className="text-2xl font-light">
                Ganzkörperpeeling
              </h3>

              <div className="mt-5 space-y-3 text-[#74675d]">

                <div className="flex justify-between border-b border-[#d9cfc3] pb-3">
                  <span>60 Min.</span>
                  <span className="font-medium text-[#80654e]">
                    50 €
                  </span>
                </div>

              </div>
            </div>


            {/* Klassische Massage */}
            <div className="rounded-[28px] bg-[#faf7f2] p-7 shadow-sm">

              <h3 className="text-2xl font-light">
                Klassische Massage
              </h3>

              <div className="mt-5 space-y-3 text-[#74675d]">

                <div className="flex justify-between border-b border-[#d9cfc3] pb-3">
                  <span>60 Min.</span>
                  <span>&nbsp;</span>
                </div>

                <div className="flex justify-between border-b border-[#d9cfc3] pb-3">
                  <span>70 Min.</span>
                  <span>&nbsp;</span>
                </div>

                <div className="flex justify-between">
                  <span>90 Min.</span>
                  <span>&nbsp;</span>
                </div>

              </div>
            </div>


            {/* Hot-Stone */}
            <div className="rounded-[28px] bg-[#faf7f2] p-7 shadow-sm">

              <h3 className="text-2xl font-light">
                Hot-Stone-Massage
              </h3>

              <div className="mt-5 space-y-3 text-[#74675d]">

                <div className="flex justify-between border-b border-[#d9cfc3] pb-3">
                  <span>60 Min.</span>
                  <span>&nbsp;</span>
                </div>

              </div>
            </div>


            {/* Schröpfmassage */}
            <div className="rounded-[28px] bg-[#faf7f2] p-7 shadow-sm">

              <h3 className="text-2xl font-light">
                Schröpfmassage
              </h3>

              <div className="mt-5 space-y-3 text-[#74675d]">

                <div className="flex justify-between border-b border-[#d9cfc3] pb-3">
                  <span>30 Min.</span>
                  <span>&nbsp;</span>
                </div>

                <div className="flex justify-between">
                  <span>60 Min.</span>
                  <span>&nbsp;</span>
                </div>

              </div>
            </div>


            {/* Anticellulitemassage */}
            <div className="rounded-[28px] bg-[#faf7f2] p-7 shadow-sm">

              <h3 className="text-2xl font-light">
                Anticellulitemassage
              </h3>

              <div className="mt-5 space-y-3 text-[#74675d]">

                <div className="flex justify-between border-b border-[#d9cfc3] pb-3">
                  <span>30 Min.</span>
                  <span>&nbsp;</span>
                </div>

                <div className="flex justify-between">
                  <span>60 Min.</span>
                  <span>&nbsp;</span>
                </div>

              </div>
            </div>


            {/* Kosmetische Lymphdrainage */}
            <div className="rounded-[28px] bg-[#faf7f2] p-7 shadow-sm">

              <h3 className="text-2xl font-light">
                Kosmetische Lymphdrainage
              </h3>

              <div className="mt-5 space-y-3 text-[#74675d]">

                <div className="flex justify-between border-b border-[#d9cfc3] pb-3">
                  <span>60 Min.</span>
                  <span>&nbsp;</span>
                </div>

                <div className="flex justify-between">
                  <span>70 Min.</span>
                  <span>&nbsp;</span>
                </div>

              </div>
            </div>


            {/* Fußzonenmassage */}
            <div className="rounded-[28px] bg-[#faf7f2] p-7 shadow-sm">

              <h3 className="text-2xl font-light">
                Fußzonenmassage
              </h3>

              <div className="mt-5 space-y-3 text-[#74675d]">

                <div className="flex justify-between border-b border-[#d9cfc3] pb-3">
                  <span>30 Min.</span>
                  <span>&nbsp;</span>
                </div>

                <div className="flex justify-between">
                  <span>60 Min.</span>
                  <span>&nbsp;</span>
                </div>

              </div>
            </div>


            {/* Gesichtsmassage */}
            <div className="rounded-[28px] bg-[#faf7f2] p-7 shadow-sm">

              <h3 className="text-2xl font-light">
                Gesichtsmassage
              </h3>

              <div className="mt-5 space-y-3 text-[#74675d]">

                <div className="flex justify-between border-b border-[#d9cfc3] pb-3">
                  <span>30 Min.</span>
                  <span>&nbsp;</span>
                </div>

                <div className="flex justify-between">
                  <span>60 Min.</span>
                  <span>&nbsp;</span>
                </div>

              </div>
            </div>


            {/* Sportmassage */}
            <div className="rounded-[28px] bg-[#faf7f2] p-7 shadow-sm">

              <h3 className="text-2xl font-light">
                Sportmassage
              </h3>

              <div className="mt-5 space-y-3 text-[#74675d]">

                <div className="flex justify-between border-b border-[#d9cfc3] pb-3">
                  <span>30 Min.</span>
                  <span>&nbsp;</span>
                </div>

                <div className="flex justify-between">
                  <span>60 Min.</span>
                  <span>&nbsp;</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* CERTIFICATES */}
      <section id="zertifikate" className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

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


            <div className="rounded-[35px] bg-[#eae1d7] p-8 md:p-10">

              <p className="max-w-xl text-lg leading-8 text-[#70635a]">
                Hier finden Sie eine Übersicht unserer Ausbildungen
                und Zertifikate.
              </p>


              {/* Zertifikate */}
              <div className="mt-10 grid gap-6 sm:grid-cols-2">

                {/* Zertifikat 1 */}
                <div className="overflow-hidden rounded-[25px] bg-[#f8f4ef] shadow-sm">

                  <img
                    src="/certificates/zertifikat-1.jpg"
                    alt="Zertifikat Massage"
                    className="h-auto w-full object-contain"
                  />

                  <div className="p-6">

                    <span className="text-xs uppercase tracking-[0.2em] text-[#9a8068]">
                      Zertifikat
                    </span>

                    <p className="mt-3 text-lg font-light text-[#4d433c]">
                      Massage
                    </p>

                  </div>
                </div>


                {/* Zertifikat 2 */}
                <div className="overflow-hidden rounded-[25px] bg-[#f8f4ef] shadow-sm">

                  <img
                    src="/certificates/zertifikat-2.jpg"
                    alt="Zertifikat Massage"
                    className="h-auto w-full object-contain"
                  />

                  <div className="p-6">

                    <span className="text-xs uppercase tracking-[0.2em] text-[#9a8068]">
                      Zertifikat
                    </span>

                    <p className="mt-3 text-lg font-light text-[#4d433c]">
                      Massage
                    </p>

                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* CONTACT */}
      <section id="kontakt" className="px-6 pb-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-[45px] bg-[#655346] px-8 py-20 text-center text-white md:px-16">

            <p className="text-xs uppercase tracking-[0.35em] text-[#d9c9ba]">
              Kontakt
            </p>

            <h2 className="mx-auto mt-6 max-w-3xl text-5xl font-light leading-tight md:text-7xl">
              Zeit für eine
              <span className="block font-serif italic text-[#e2d5c8]">
                Auszeit?
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl leading-7 text-[#e2d9d1]">
              Vereinbaren Sie Ihren persönlichen Termin
              ganz einfach über WhatsApp.
            </p>


            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex rounded-full bg-[#f7f3ed] px-9 py-4 text-sm text-[#594a40] transition hover:bg-white"
            >
              Termin per WhatsApp buchen
            </a>


            <div className="mx-auto mt-16 grid max-w-3xl gap-8 border-t border-white/20 pt-10 text-sm md:grid-cols-2">

              <div>

                <p className="text-[#cbb9a9]">
                  Adresse
                </p>

                <p className="mt-3 leading-7">
                  An den Eichen 1A
                  <br />
                  59823 Arnsberg
                </p>

              </div>


              <div>

                <p className="text-[#cbb9a9]">
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
      <footer className="border-t border-[#ddd4ca] px-6 py-10 lg:px-10">

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