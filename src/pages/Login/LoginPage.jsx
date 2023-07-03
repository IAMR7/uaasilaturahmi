import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  clearUser,
  fetchUser,
  setToken,
  setUser,
} from "../../redux/slices/userSlice";
import { api } from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [email, setEmail] = useState();
  const [password, setpassword] = useState();

  const handleLogin = async () => {
    let apipath = "login";
    const postdata = {
      email: email,
      password: password,
    };
    return await api.postApi
      .post(apipath, postdata)
      .then((response) => {
        if (response.status === 200) {
          let { user, token } = response.data;
          dispatch(setUser({ user }));
          dispatch(setToken(token));
          toast.success("Yeay! kamu berhasil login");
          navigate("/home");
        } else {
          toast.error("Email atau password salah!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(user);

  return (
    <div className="hero min-h-screen bg-base-200">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:px-40">
          <h1 className="text-5xl font-bold">Silaturahmi Bersama!</h1>
          <p className="py-6">
            Ciptakan silaturahmi dalam keluarga Civitas Akademika Universitas
            Alma Ata dengan cara yang hangat dan menyenangkan
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-sm bg-base-100">
          <div className="card-body">
            <div className="flex flex-row justify-center items-center">
              <img
                src="/images/uaa.png"
                alt=""
                width={86}
                onClick={() => dispatch(clearUser())}
              />
            </div>
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: emailsaya@gmail.com"
                  className="input input-bordered"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Input password"
                  className="input input-bordered"
                  autoComplete="password"
                  onChange={(e) => setpassword(e.target.value)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
            </form>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={() => handleLogin()}>
                Login
              </button>
            </div>
            <div className="form-control">
              <Link
                className="btn btn-ghost border border-primary text-primary hover:bg-base-200 hover:border hover:border-primary"
                to={"/register"}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
