import { useSelector } from "react-redux";
import { api } from "../../api";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../../components/navbar/Navbar";
import BottomNav from "../../components/bottomnav/BottomNav";

export default function FriendPage() {
  const user = useSelector((state) => state.user);
  const [friends, setFriends] = useState([]);
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
        console.log(friends);
        setFriends(friends);
      }
    } catch {
      toast.error("Ada kesalahan teknis, silahkan refresh ulang");
    }
  }, [user.id]);

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <div className="page-content">
      <Navbar />
      <div className="min-h-screen mt-16 xl:px-72 lg:px-64 px-4 py-6 w-full mb-10">
        <p className="text-lg font-bold mb-4">Total Teman ({friends.length})</p>
        {friends.map((friend) => {
          return (
            <div key={friend.id} className="mb-6">
              <div className="flex flex-row justify-between items-center border border-base-300 rounded-lg p-3">
                <div className="flex flex-row items-center gap-2">
                  {friend.avatar === null ? (
                    <img
                      width={36}
                      height={36}
                      className="rounded-full m-2"
                      src={`/images/${
                        friend.gender === "Pria"
                          ? "male-profile.png"
                          : "female-profile.png"
                      }`}
                      alt="profile-picture"
                    />
                  ) : (
                    <img
                      width={36}
                      height={36}
                      className="rounded-full m-2"
                      src={`/images/${"female-profile.png"}`}
                      alt="profile-picture"
                    />
                  )}
                  <div className="flex flex-col">
                    <p className="font-medium">
                      {friend.name}{" "}
                      {friend.verified === 1 && (
                        <i className="bx bx-fw bx-badge-check text-primary"></i>
                      )}
                    </p>
                    <p className="text-xs">
                      {friend.status !== null && friend.status.status}{" "}
                      {friend.major !== null && friend.major.major}
                    </p>
                  </div>
                </div>
                <i className="bx bx-fw bx-trash text-error"></i>
              </div>
            </div>
          );
        })}
      </div>
      <BottomNav />
    </div>
  );
}
