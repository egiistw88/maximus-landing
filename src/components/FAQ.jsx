import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Apakah MAXIMUS perlu koneksi internet?',
      answer: 'Tidak! MAXIMUS dirancang dengan teknologi offline-first. Semua fitur utama (tambah order, catat pengeluaran, lihat rekap) berfungsi penuh tanpa internet. Data otomatis tersinkronisasi saat Anda online kembali.'
    },
    {
      question: 'Apakah data saya aman?',
      answer: 'Ya, sangat aman. Data disimpan di akun Anda yang terenkripsi. Hanya Anda yang memiliki akses ke data keuangan Anda. Kami tidak membagikan atau menjual data Anda ke pihak manapun.'
    },
    {
      question: 'Bagaimana kalau saya ganti HP?',
      answer: 'Tenang! Cukup login ke akun yang sama di HP baru, semua data Anda akan otomatis tersinkronkan. Pastikan Anda sudah online setidaknya sekali di HP lama agar data tersimpan di cloud.'
    },
    {
      question: 'Kalau sinyal hilang saat input data, apakah aman?',
      answer: 'Sangat aman! Semua data yang Anda input disimpan langsung di HP Anda. Saat sinyal kembali, data otomatis tersinkronkan ke cloud. Tidak ada data yang hilang.'
    },
    {
      question: 'Apakah saya bisa hapus semua data?',
      answer: 'Ya, Anda memiliki kontrol penuh atas data Anda. Di pengaturan aplikasi, tersedia opsi untuk menghapus semua data order dan expense jika diperlukan. Proses ini tidak dapat dibatalkan.'
    }
  ];

  return (
    <section className="py-20 bg-ui-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-ui-text mb-4">
            Pertanyaan Umum
          </h3>
          <p className="text-lg text-ui-muted">
            Jawaban untuk pertanyaan yang sering ditanyakan
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-ui-background border border-ui-border rounded-ui-lg overflow-hidden shadow-ui-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-ui-surface-muted transition-colors"
              >
                <span className="font-semibold text-ui-text pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-ui-muted transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-ui-muted leading-relaxed border-t border-ui-border pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
