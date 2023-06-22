import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("Pria");
  const [majors, setMajors] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [major, setMajor] = useState(null);
  const [status, setStatus] = useState(null);

  const navigate = useNavigate();

  const handleRegister = async () => {
    let apipath = `register`;
    let postdata = {
      email: email,
      password: password,
      name: name,
      username: username,
      gender: gender,
      major_id: major.id,
      status_id: status.id,
    };
    return await api.postApi
      .post(apipath, postdata)
      .then((response) => {
        if (response.status === 201) {
          let resp = response.data;
          toast.success(resp.success);
          navigate("/login");
        } else {
          toast.error("Terjadi kesalahan, coba ulangi");
        }
      })
      .catch(() => {
        toast.error("Ada kesalahan teknis, silahkan refresh ulang");
      });
  };

  const getMajors = async () => {
    let apipath = `majors`;
    return await api.getApi
      .get(apipath)
      .then((response) => {
        if (response.status === 200) {
          let resp = response.data;
          setMajors(resp);
        } else {
          toast.error("Terjadi kesalahan, coba ulangi");
        }
      })
      .catch(() => {
        toast.error("Ada kesalahan teknis, silahkan refresh ulang");
      });
  };

  const getStatuses = async () => {
    let apipath = `statuses`;
    return await api.getApi
      .get(apipath)
      .then((response) => {
        if (response.status === 200) {
          let resp = response.data;
          setStatuses(resp);
        } else {
          toast.error("Terjadi kesalahan, coba ulangi");
        }
      })
      .catch(() => {
        toast.error("Ada kesalahan teknis, silahkan refresh ulang");
      });
  };

  useEffect(() => {
    getMajors();
    getStatuses();
  }, []);

  return (
    <div className="min-h-screen bg-base-200 flex flex-row justify-center items-center px-6 pb-20 pt-10">
      <div className="card flex-shrink-0 w-full lg:w-1/3 shadow-sm bg-base-100 lg:mb-0 mb-72">
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Jenis Kelamin</span>
              </label>
              <div className="flex flex-row items-center gap-3">
                <div
                  onClick={() => setGender("Pria")}
                  className={
                    gender === "Pria" ? "btn btn-sm btn-primary" : "btn btn-sm"
                  }
                >
                  Laki-laki
                </div>
                <div
                  onClick={() => setGender("Perempuan")}
                  className={
                    gender === "Perempuan"
                      ? "btn btn-sm btn-primary"
                      : "btn btn-sm"
                  }
                >
                  Perempuan
                </div>
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
                  onChange={(e) => setMajor(JSON.parse(e.target.value))}
                >
                  <option disabled value={0}>
                    Pilih jurusan ...
                  </option>
                  {majors.length > 0 &&
                    majors.map((major) => {
                      return (
                        <option key={major.id} value={JSON.stringify(major)}>
                          {major.major}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Status</span>
                </label>
                <select
                  defaultValue={0}
                  className="select select-bordered w-full"
                  onChange={(e) => setStatus(JSON.parse(e.target.value))}
                >
                  <option disabled value={0}>
                    Pilih status ...
                  </option>
                  {statuses.length > 0 &&
                    statuses.map((status) => {
                      return (
                        <option key={status.id} value={JSON.stringify(status)}>
                          {status.status}
                        </option>
                      );
                    })}
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
              <button
                className="btn btn-primary"
                onClick={() => handleRegister()}
              >
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
