import { useCallback, useState } from "react";
import { api } from "../../api";
import BottomNav from "../../components/bottomnav/BottomNav";
import Navbar from "../../components/navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useState("");
  const [users, setUsers] = useState();
  const user = useSelector((state) => state.user);
  const [friends, setFriends] = useState([]);

  const searchUser = async (params) => {
    let apipath = `user/search?search=${params}`;
    return await api.getApi
      .get(apipath)
      .then((response) => {
        if (response.status === 200) {
          let resp = response.data;
          let check = resp.filter((dt) => {
            return dt.id !== user.id;
          });
          getFriends();
          setUsers(check);
        }
      })
      .catch(() => {
        toast.error("Ada kesalahan teknis, silahkan refresh ulang");
      });
  };

  const handleAddfriend = async (friendId) => {
    let apipath = `friendship`;
    let postdata = {
      user_id: user.id,
      friend_user_id: friendId,
      status: "Menunggu Konfirmasi",
    };
    return await api.postApi
      .post(apipath, postdata)
      .then((response) => {
        if (response.status === 201) {
          let resp = response.data;
          searchUser(searchParams);
          toast.success(resp.message);
        }
      })
      .catch(() => {
        toast.error("Ada kesalahan teknis, silahkan refresh ulang");
      });
  };

  const getFriends = useCallback(async () => {
    let apipath = `friendships/${user.id}`;
    try {
      const response = await api.getApi.get(apipath);
      if (response.status === 200) {
        let resp = response.data;
        let friends = [];
        resp.map((friend) => {
          if (friend.user.id !== user.id) {
            friends.push(friend.user);
          } else {
            friends.push(friend.friend_user);
          }
        });
        setFriends(friends);
      }
    } catch {
      toast.error("Ada kesalahan teknis, silahkan refresh ulang");
    }
  }, [user.id]);

  return (
    <div className="page-content">
      <Navbar />
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
      <section className="min-h-screen mt-16 xl:px-72 lg:px-64 px-4 py-6 w-full mb-72">
        <div className="search-input flex flex-row gap-2 items-center mb-4">
          <div className="form-control w-11/12">
            <input
              type="text"
              placeholder="Cari teman/saudara ..."
              className="input input-bordered w-full h-12 text-sm"
              onChange={(e) => {
                setSearchParams(e.target.value);
              }}
            />
          </div>
          <i
            className="bx-sm bx bx-search"
            onClick={() => searchUser(searchParams)}
          ></i>
        </div>
        {users && users.length > 0 && (
          <div className="result">
            <p className="text-lg font-bold">
              Teman Ditemukan ({users.length})
            </p>
            <div className="list-user mt-4 flex flex-col gap-3">
              {users.map((user) => {
                return (
                  <div
                    key={user.id}
                    className="menu rounded-lg border border-base-300 px-4 py-4"
                  >
                    <div className="flex flex-row justify-between items-center">
                      <div className="flex flex-row gap-3 items-center">
                        {user.avatar === null ? (
                          <img
                            width={40}
                            height={40}
                            tabIndex={0}
                            className="rounded-full"
                            src={`/images/${
                              user.gender === "Pria"
                                ? "male-profile.png"
                                : "female-profile.png"
                            }`}
                            alt="profile-picture"
                          />
                        ) : (
                          <img
                            width={40}
                            height={40}
                            tabIndex={0}
                            className="rounded-full"
                            src={`/images/${"female-profile.png"}`}
                            alt="profile-picture"
                          />
                        )}
                        <div className="flex flex-col">
                          <p className="font-semibold">{user.name}</p>
                          <p className="text-sm">
                            {user.status_id !== null &&
                            user.status.status !== "Mahasiswa"
                              ? user.status.status
                              : ""}{" "}
                            {user.major_id !== null && user.major.major}
                          </p>
                        </div>
                      </div>

                      {!friends.some((friend) => friend.id === user.id) && (
                        <button
                          className="btn btn-sm"
                          onClick={() => handleAddfriend(user.id)}
                        >
                          <i className="bx bx-fw bx-plus"></i>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
      <BottomNav />
    </div>
  );
}
