import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../redux/slices/userSlice";

export default function Navbar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
    dispatch(clearUser());
  };
  return (
    <div className="navbar bg-base-100 lg:px-40 px-6 border-b border-base-300 fixed z-10 top-0">
      <div className="navbar-start gap-4">
        <Link to="/home">
          <img src={"/images/uaa.png"} width={36} height={36} alt="logo" />
        </Link>
      </div>

      <div className="navbar-end gap-4">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="indicator m-2">
            <i className="bx bx-fw bx-bell"></i>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
          <div className="dropdown-content menu shadow bg-base-100 rounded-box w-80 py-4">
            <div className="flex flex-row px-3 justify-between items-center">
              <p>Notifikasi (5)</p>
              <p className="text-primary">Tandai semua dibaca</p>
            </div>
            <ul className="mt-3">
              <li>
                <p className="text-sm">Akbar menerima pertemanan kamu</p>
              </li>
              <li>
                <p className="text-sm">Akbar menerima pertemanan kamu</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <div className="w-9 avatar online">
            {user.avatar === null ? (
              <img
                tabIndex={0}
                className="rounded-full m-2"
                src={`/images/${
                  user.gender === "Pria"
                    ? "male-profile.png"
                    : "female-profile.png"
                }`}
                alt="profile-picture"
              />
            ) : (
              <img
                tabIndex={0}
                className="rounded-full m-2"
                src={`/images/${"female-profile.png"}`}
                alt="profile-picture"
              />
            )}
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/profile">Profil Saya</Link>
            </li>
            <li>
              <Link to="/profile/edit">Edit Profil</Link>
            </li>
            <li>
              <Link to="/password/edit">Edit Password</Link>
            </li>
            <li>
              <a onClick={() => handleLogout()}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
