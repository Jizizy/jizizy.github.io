"use client";

import Image from "next/image";

const whatsappUrl =
  "https://wa.me/4915901316377?text=Hallo%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20vereinbaren.";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f2eb] text-[#3d342d]">
      {/* Navigation */}
      <header className="border-b border-[#d9cfc3]/60 bg-[#f7f2eb]/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-medium tracking-[0.18em]">
            OLESSIA EPP
          </a>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#ueber-uns" className="transition hover:text-[#96765c]">
              Über uns
            </a>
            <a href="#massagen" className="transition hover:text-[#96765c]">
              Massagen
            </a>
            <a href="#preise" className="transition hover:text-[#96765c]">
              Preise
            </a>
            <a href="#kontakt" className="transition hover:text-[#96765c]">
              Kontakt
            </a>
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#6f5845] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#594636]"
          >
            Termin buchen
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[680px] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.28em] text-[#96765c]">
              Massage & Wohlbefinden
            </p>

            <h1 className="max-w-xl text-5xl font-light leading-[1.08] tracking-tight md:text-7xl">
              Zeit für
              <span className="block italic text-[#96765c]">dich.</span>
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-[#74675d]">
              Entspannung, Ruhe und bewusste Auszeit vom Alltag.
              Gönnen Sie Ihrem Körper eine wohltuende Massage in
              angenehmer Atmosphäre.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#6f5845] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#594636]"
              >
                Termin per WhatsApp buchen
              </a>

              <a
                href="#massagen"
                className="inline-flex items-center justify-center rounded-full border border-[#bcae9f] px-8 py-4 text-sm font-medium transition hover:bg-[#eee6dc]"
              >
                Massagen entdecken
              </a>
            </div>
          </div>

          {/* Decorative visual */}
          <div className="relative mx-auto flex h-[480px] w-full max-w-md items-center justify-center">
            <div className="absolute h-[390px] w-[300px] rounded-[48%] bg-[#e4d7c9]" />
            <div className="absolute h-[330px] w-[250px] rounded-[48%] border border-[#c8b7a5]" />
            <div className="relative text-center">
              <p className="font-serif text-6xl font-light italic text-[#96765c]">
                Ruhe
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[#74675d]">
                Körper · Geist · Wohlbefinden
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="ueber-uns" className="bg-[#eee6dc]">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#96765c]">
            Über uns
          </p>

          <h2 className="mt-4 text-4xl font-light md:text-5xl">
            Ihre Auszeit vom Alltag
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#74675d]">
            Bei Olessia Epp steht Ihr Wohlbefinden im Mittelpunkt.
            Jede Behandlung soll Ihnen helfen, zur Ruhe zu kommen,
            neue Energie zu tanken und sich rundum wohlzufühlen.
          </p>
        </div>
      </section>

      {/* Massages */}
      <section id="massagen" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-[#96765c]">
            Behandlungen
          </p>
          <h2 className="mt-4 text-4xl font-light md:text-5xl">
            Unsere Massagen
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Entspannungsmassage",
              text: "Sanfte und wohltuende Massage für tiefe Entspannung.",
            },
            {
              title: "Rücken & Nacken",
              text: "Gezielte Behandlung für Rücken, Schultern und Nacken.",
            },
            {
              title: "Ganzkörpermassage",
              text: "Eine wohltuende Auszeit für den gesamten Körper.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-[#d9cfc3] bg-[#faf7f2] p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-8 h-12 w-12 rounded-full bg-[#e4d7c9]" />

              <h3 className="text-2xl font-light">{item.title}</h3>

              <p className="mt-4 leading-7 text-[#74675d]">{item.text}</p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block text-sm font-medium text-[#80654e] underline underline-offset-4"
              >
                Termin anfragen →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Prices */}
      <section id="preise" className="bg-[#eee6dc]">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#96765c]">
              Preisliste
            </p>

            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Preise
            </h2>

            <p className="mt-5 text-[#74675d]">
              Unsere aktuellen Preise werden in Kürze ergänzt.
            </p>
          </div>

          <div className="mt-12 rounded-[28px] bg-[#faf7f2] p-8 shadow-sm md:p-12">
            <div className="flex items-center justify-between border-b border-[#d9cfc3] py-5">
              <span>Behandlung</span>
              <span className="text-[#96765c]">Preis</span>
            </div>

            <div className="flex items-center justify-between border-b border-[#d9cfc3] py-5 text-[#74675d]">
              <span>Preise folgen</span>
              <span>—</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-[36px] bg-[#6f5845] px-8 py-16 text-center text-white md:px-16">
          <p className="text-sm uppercase tracking-[0.25em] text-[#e4d7c9]">
            Kontakt
          </p>

          <h2 className="mt-5 text-4xl font-light md:text-5xl">
            Bereit für eine Auszeit?
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-[#e8ded4]">
            Vereinbaren Sie Ihren persönlichen Termin ganz einfach
            über WhatsApp.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex rounded-full bg-[#f7f2eb] px-8 py-4 text-sm font-medium text-[#594636] transition hover:bg-white"
          >
            Termin per WhatsApp buchen
          </a>

          <div className="mt-12 grid gap-6 border-t border-white/20 pt-10 text-sm md:grid-cols-2">
            <div>
              <p className="text-[#cdbdad]">Adresse</p>
              <p className="mt-2">
  An den Eichen 1A<br />
  59823 Arnsberg
</p>
            </div>

            <div>
              <p className="text-[#cdbdad]">Telefon & WhatsApp</p>
              <p className="mt-2">+49 159 01316377</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#d9cfc3] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[#74675d] md:flex-row">
          <p>© {new Date().getFullYear()} Olessia Epp</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-[#594636]">
              Impressum
            </a>
            <a href="#" className="hover:text-[#594636]">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
