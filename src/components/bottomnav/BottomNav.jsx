export default function BottomNav() {
  return (
    <div className="btm-nav">
      <button className="active text-primary">
        <i className="bx bx-fw bx-home"></i>
        <span className="btm-nav-label text-sm">Beranda</span>
      </button>
      <button className="text-secondary">
        <i className="bx bx-fw bx-search"></i>
        <span className="btm-nav-label text-sm">Cari</span>
      </button>
      <button className="text-secondary">
        <i className="bx bx-fw bx-group"></i>
        <span className="btm-nav-label text-sm">Teman</span>
      </button>
      <button className="text-secondary">
        <i className="bx bx-fw bx-user"></i>
        <span className="btm-nav-label text-sm">Saya</span>
      </button>
    </div>
  );
}
