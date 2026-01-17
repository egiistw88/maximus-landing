export default function OfflineFirst() {
  const points = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'CRUD Offline Penuh',
      description: 'Tambah, edit, hapus order dan expense tanpa koneksi internet. Semua berfungsi sempurna.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Sinkronisasi Dua Arah',
      description: 'Data otomatis sync saat online. Perubahan di HP lain atau web langsung tersinkron.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Aman Per Akun',
      description: 'Data tersimpan aman di akun Anda. Hanya Anda yang bisa akses, privasi terjamin.'
    }
  ];

  return (
    <section className="py-20 bg-ui-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-ui-xl bg-ui-primary-soft text-ui-primary text-sm font-semibold mb-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              Offline-First Technology
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-ui-text mb-4">
              Bekerja Tanpa Internet
            </h3>
            <p className="text-lg text-ui-muted">
              Teknologi offline-first memastikan aplikasi tetap berfungsi penuh bahkan tanpa koneksi
            </p>
          </div>

          <div className="space-y-6">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex gap-4 bg-ui-background border border-ui-border rounded-ui-lg p-6 shadow-ui-sm hover:shadow-ui-md transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-ui-md bg-ui-primary-soft text-ui-primary flex items-center justify-center">
                  {point.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-ui-text mb-2">
                    {point.title}
                  </h4>
                  <p className="text-ui-muted leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
