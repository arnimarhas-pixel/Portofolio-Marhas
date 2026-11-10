  export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    // mx-auto max-w-2xl → lebar maksimal 42rem, posisi di tengah
    // mb-12             → jarak bawah 48px sebelum isi section
    <div className='mx-auto mb-12 max-w-2xl text-center'>
      {/* Label kecil: huruf kapital, jarak antarhuruf lebar */}
      <p className='text-sm font-semibold uppercase tracking-widest text-brand'>
        {eyebrow}
      </p>

      {/* Judul utama: 30px di ponsel, 36px mulai layar sm */}
      <h2 className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
        {title}
      </h2>

      {/* RENDER BERSYARAT: <p> hanya tampil jika subtitle dikirim */}
      {subtitle && <p className='mt-4 text-muted'>{subtitle}</p>}
    </div>
  );
}