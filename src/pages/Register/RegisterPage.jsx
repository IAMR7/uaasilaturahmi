import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-row justify-center items-center px-6 pb-20 pt-10">
      <div className="card flex-shrink-0 w-full lg:w-1/3 shadow-sm bg-base-100">
        <div className="card-body w-full">
          <div className="flex flex-row justify-center items-center">
            <img src="/images/uaa.png" alt="" width={86} />
          </div>
          <form className="flex flex-col gap-3">
            <div className="flex flex-row flex-wrap lg:flex-nowrap items-center gap-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Isikan email"
                  className="input input-bordered w-full text-sm"
                  defaultValue={""}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Isikan password"
                  className="input input-bordered w-full text-sm"
                  autoComplete="password"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="flex flex-row flex-wrap lg:flex-nowrap items-center gap-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Nama Lengkap</span>
                </label>
                <input
                  type="text"
                  placeholder="Isikan nama"
                  className="input input-bordered w-full text-sm"
                  defaultValue={""}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Isikan username"
                  className="input input-bordered w-full text-sm"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Jenis Kelamin</span>
              </label>
              <div className="flex flex-row items-center gap-3">
                <input
                  type="radio"
                  aria-label="Laki-laki"
                  className="btn btn-sm"
                  defaultChecked={true}
                />
                <input
                  type="radio"
                  aria-label="Perempuan"
                  className="btn btn-sm"
                  defaultChecked={false}
                />
              </div>
            </div>
            <div className="flex flex-row flex-wrap lg:flex-nowrap items-center gap-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Jurusan/Prodi</span>
                </label>
                <select
                  defaultValue={0}
                  className="select select-bordered w-full"
                >
                  <option disabled value={0}>
                    Pilih jurusan ...
                  </option>
                  <option value={1}>S1-Informatika</option>
                  <option value={2}>S1-Sistem Informasi</option>
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Status</span>
                </label>
                <select
                  defaultValue={0}
                  className="select select-bordered w-full"
                >
                  <option disabled value={0}>
                    Pilih status ...
                  </option>
                  <option value={1}>Mahasiswa</option>
                  <option value={2}>Dosen</option>
                </select>
              </div>
            </div>
          </form>
          <div className="flex flex-row justify-end items-center gap-3 mt-6">
            <div className="form-control">
              <Link className="btn" to={"/login"}>
                Sudah punya akun?
              </Link>
            </div>
            <div className="form-control">
              <button className="btn btn-primary">Daftar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
