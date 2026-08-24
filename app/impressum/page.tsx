export default function impressum() {
  return (
    <main className="min-h-screen bg-[#f7f2eb] px-6 py-20 text-[#3d342d]">
      <div className="mx-auto max-w-4xl">

        <a
          href="/"
          className="text-sm text-[#96765c] hover:underline"
        >
          ← Zurück zur Startseite
        </a>

        <p className="mt-12 text-xs uppercase tracking-[0.3em] text-[#96765c]">
          Rechtliche Informationen
        </p>

        <h1 className="mt-4 text-5xl font-light">
          Impressum
        </h1>

        <div className="mt-12 space-y-10 text-[#74675d]">

          <section>
            <h2 className="text-2xl font-light text-[#3d342d]">
              Angaben gemäß § 5 TMG
            </h2>

            <p className="mt-4 leading-8">
              Olessia Epp
              <br />
              Olessia Wellness
              <br />
              An den Eichen 1a
              <br />
              59823 Arnsberg
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-[#3d342d]">
              Kontakt
            </h2>

            <p className="mt-4 leading-8">
              Telefon: +49 159 01316377
              <br />
              E-Mail:{" "}
              <a
                href="mailto:eppmaxim1982@gmail.com"
                className="text-[#96765c] hover:underline"
              >
                eppmaxim1982@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-[#3d342d]">
              Tätigkeit
            </h2>

            <p className="mt-4 leading-8">
              Erbringung von Massage- und Wellnessdienstleistungen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-[#3d342d]">
              Umsatzsteuer-ID
            </h2>

            <p className="mt-4 leading-8">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz:
              <br />
              Wird ergänzt.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}