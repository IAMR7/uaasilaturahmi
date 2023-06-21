import Navbar from "../../../components/navbar/Navbar";

export default function ProfileEditPage() {
  return (
    <div className="page-content">
      <Navbar />
      <div className="min-h-screen mt-16 xl:px-72 lg:px-64 px-4 py-6 w-full mb-10">
        <div className="flex flex-col gap-4 mb-32">
          <div className="profile_pic_edit px-3 flex flex-col gap-2">
            <p className="text-sm font-bold">Edit Foto Profil</p>
            <div className="relative w-20 p-20">
              <img
                // className="rounded-lg"
                className="absolute top-0 left-0 rounded-lg object-cover w-full h-full"
                // width={573}
                // height={573}
                src={
                  "https://pbs.twimg.com/profile_images/1273248642007089157/GPfXUOJf_400x400.jpg"
                }
                alt="post-picture"
              />
            </div>
            <input
              type="file"
              className="file-input file-input-bordered file-input-sm w-full max-w-xs"
            />
          </div>
          <div className="cover_pic_edit px-3 flex flex-col gap-2">
            <p className="text-sm font-bold">Edit Foto Sampul</p>
            <div className="relative p-20">
              <img
                // className="rounded-lg"
                className="absolute top-0 left-0 rounded-lg object-cover w-full h-full"
                // width={573}
                // height={573}
                src={"https://i.ytimg.com/vi/8Fm9U36IGjY/maxresdefault.jpg"}
                alt="post-picture"
              />
            </div>
            <input
              type="file"
              className="file-input file-input-bordered file-input-sm w-full max-w-xs"
            />
          </div>
          <div className="form-control px-3 w-full">
            <label className="label">
              <span className="label-text font-bold">Nama</span>
            </label>
            <input
              type="text"
              placeholder="Isikan namamu ..."
              className="input input-bordered w-full text-sm"
              defaultValue={"Reza Febriansyah"}
            />
          </div>
          <div className="form-control px-3 w-full">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Isikan email"
              className="input input-bordered w-full text-sm"
              defaultValue={"reza@email.com"}
            />
          </div>
          <div className="form-control px-3 w-full">
            <label className="label">
              <span className="label-text font-bold">Username</span>
            </label>
            <input
              type="text"
              placeholder="Isikan username ..."
              className="input input-bordered w-full text-sm"
              defaultValue={"iamr7"}
            />
          </div>
          <div className="form-control px-3 w-full">
            <label className="label">
              <span className="label-text font-bold">Nomor Telepon</span>
            </label>
            <input
              type="text"
              placeholder="Isikan namamu ..."
              className="input input-bordered w-full text-sm"
              defaultValue={"08123455567"}
            />
          </div>
          <div className="form-control px-3 w-full">
            <label className="label">
              <span className="label-text font-bold">Jenis Kelamin</span>
            </label>
            <div className="flex flex-row items-center gap-3">
              <input
                type="radio"
                aria-label="Laki-laki"
                className="btn"
                defaultChecked={true}
              />
              <input
                type="radio"
                aria-label="Perempuan"
                className="btn"
                defaultChecked={false}
              />
            </div>
          </div>
          <div className="form-control px-3 w-full">
            <label className="label">
              <span className="label-text font-bold">Jurusan/Prodi</span>
            </label>
            <select defaultValue={1} className="select select-bordered w-full">
              <option disabled value={0}>
                Pilih jurusan ...
              </option>
              <option value={1}>S1-Informatika</option>
              <option value={2}>S1-Sistem Informasi</option>
            </select>
          </div>
          <div className="form-control px-3 w-full">
            <label className="label">
              <span className="label-text font-bold">Status</span>
            </label>
            <select defaultValue={1} className="select select-bordered w-full">
              <option disabled value={0}>
                Pilih status ...
              </option>
              <option value={1}>Mahasiswa</option>
              <option value={2}>Dosen</option>
            </select>
          </div>
          <div className="form-control px-3 w-full">
            <label className="label">
              <span className="label-text font-bold">Bio</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              defaultValue={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga consequatur minus ullam rerum molestiae saepe ipsam, quam dolorum! Ducimus."
              }
              placeholder="Bio"
            ></textarea>
          </div>
          <div className="px-3 flex flex-row items-center gap-3">
            <button className="btn btn-sm btn-primary">Simpan</button>
            <button className="btn btn-sm">Batal</button>
          </div>
        </div>
      </div>
    </div>
  );
}
