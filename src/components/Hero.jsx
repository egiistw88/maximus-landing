export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-ui-surface to-ui-background py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-ui-text mb-6 leading-tight">
            Kelola Keuangan Driver{' '}
            <span className="text-ui-primary">Lebih Mudah</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-ui-muted mb-10 leading-relaxed">
            Hitung pendapatan bersih per order, catat pengeluaran dengan cepat, dan pantau rekap harian/bulanan. 
            Semua bekerja offline dengan sinkronisasi otomatis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://maximus-beta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-ui-lg bg-ui-primary hover:bg-ui-primary-strong text-white text-lg font-semibold shadow-ui-md transition-all hover:shadow-ui-lg hover:-translate-y-0.5"
            >
              Buka MAXIMUS
            </a>
            <a
              href="#install"
              className="w-full sm:w-auto px-8 py-4 rounded-ui-lg bg-ui-surface border-2 border-ui-border hover:border-ui-primary text-ui-text text-lg font-semibold transition-all hover:bg-ui-surface-muted"
            >
              Cara Install
            </a>
          </div>

          {/* Badge */}
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-ui-xl bg-ui-primary-soft text-ui-primary text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            100% Gratis • Offline-First • Data Aman
          </div>
        </div>
      </div>
    </section>
  );
}
