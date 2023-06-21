import Navbar from "../../components/navbar/Navbar";

export default function PasswordEditPage() {
  return (
    <div className="page-content">
      <Navbar />
      <div className="min-h-screen mt-16 xl:px-72 lg:px-64 px-4 py-6 w-full mb-10">
        <div className="mb-32">
          <form action="" method="post" className="flex flex-col gap-4">
            <div className="form-control px-3 w-full">
              <label className="label">
                <span className="label-text font-bold">Password baru</span>
              </label>
              <input
                type="password"
                placeholder="Isikan password baru ..."
                className="input input-bordered w-full text-sm"
                defaultValue={""}
                autoComplete=""
              />
            </div>
            <div className="form-control px-3 w-full">
              <label className="label">
                <span className="label-text font-bold">
                  Konfirmasi Password Baru
                </span>
              </label>
              <input
                type="password"
                placeholder="Isikan ulang password baru ..."
                className="input input-bordered w-full text-sm"
                defaultValue={""}
                autoComplete=""
              />
            </div>

            <div className="px-3 flex flex-row items-center gap-3">
              <button type="submit" className="btn btn-sm btn-primary">
                Simpan
              </button>
              <button className="btn btn-sm">Batal</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
