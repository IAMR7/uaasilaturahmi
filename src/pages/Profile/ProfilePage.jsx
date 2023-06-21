import { Link } from "react-router-dom";
import Post from "../../components/post/Post";
import Navbar from "../../components/navbar/Navbar";

export default function ProfilePage() {
  return (
    <div className="page-content">
      <Navbar />
      <div className="min-h-screen mt-16 xl:px-72 lg:px-64 px-4 py-6 w-full mb-10">
        <div className="border border-base-300 rounded-lg p-1">
          <div className="cover_profile h-40 w-full relative">
            <img
              className="absolute top-0 left-0 rounded-lg object-cover w-full h-full"
              src={"https://i.ytimg.com/vi/8Fm9U36IGjY/maxresdefault.jpg"}
              alt="post-picture"
            />
            <div className="pic_profile absolute -bottom-10 left-3 z-0">
              <img
                className="rounded-full"
                width={100}
                height={100}
                src={
                  "https://pbs.twimg.com/profile_images/1273248642007089157/GPfXUOJf_400x400.jpg"
                }
                alt="post-picture"
              />
            </div>
          </div>
          <div className="mt-12 px-3 py-2">
            <div className="head-profile">
              <h1 className="font-bold text-lg">
                {"Reza Febriansyah".toUpperCase()}{" "}
                <i className="bx bx-fw bx-badge-check text-primary"></i>
              </h1>
              <p className="text-xs">Alumni-Informatika (2018)</p>
              <div className="flex flex-row justify-start items-center gap-2 mt-2">
                <p className="text-xs">
                  <span className="font-bold">Teman:</span> 372
                </p>
                <p className="text-xs">
                  <span className="font-bold">Postingan:</span> 1020
                </p>
                <p className="text-xs">
                  <span className="font-bold">Disukai:</span> 531
                </p>
              </div>
              <p className="text-xs mt-2">
                <span className="font-bold">Bio:</span> Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Libero ad sint enim sapiente
                voluptas impedit excepturi odit cupiditate voluptatum similique.
              </p>
              <div className="flex flex-row items-center gap-1 mt-2">
                <button
                  className="btn btn-sm"
                  onClick={() => window.modal_friends.showModal()}
                >
                  Daftar Teman
                </button>
                <Link to={"/profile/edit"} className="btn btn-sm">
                  Edit Profil
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content lg:px-40 mt-6">
          <div className="w-full mb-6">
            <textarea
              placeholder="Tulis sesuatu untuk diceritakan ..."
              className="textarea textarea-bordered textarea-md w-full font-sm"
            ></textarea>
            <div className="flex justify-between items-center">
              <button className="btn btn-sm">Upload Gambar</button>
              <button className="btn btn-sm btn-primary">Posting</button>
            </div>
          </div>
          <div className="list-post">
            <Post
            //   key={post.id}
            //   nameOfUser={post.user.name}
            //   verifiedOfUser={post.user.verified}
            //   statusOfUser={post.user.status}
            //   majorOfUser={post.user.major}
            //   postId={post.id}
            //   content={post.content}
            //   imageSrc={post.image}
            //   comments={post.comment}
            //   likes={post.like}
            />
          </div>
        </div>
        {/* start modal friends */}
        <dialog
          id="modal_friends"
          className="modal modal-bottom sm:modal-middle"
        >
          <form method="dialog" className="modal-box h-full">
            <div className="flex flex-row justify-between items-center">
              <p>Total Teman (5)</p>
              <button
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle btn-ghost"
              >
                ✕
              </button>
            </div>
            <div className="form-control mt-3">
              <input
                type="text"
                placeholder="Cari teman/saudara ..."
                className="input input-bordered w-full h-12 text-sm"
              />
            </div>
            <div className="py-4 overflow-y-auto">
              <div className="py-1 mb-6">
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-2">
                    <img
                      className="rounded-lg"
                      width={36}
                      height={36}
                      src={
                        "https://pbs.twimg.com/profile_images/1273248642007089157/GPfXUOJf_400x400.jpg"
                      }
                      alt="profile-picture"
                    />
                    <div className="flex flex-col">
                      <p className="font-medium">
                        Reza Febriansyah{" "}
                        <i className="bx bx-fw bx-badge-check text-primary"></i>
                      </p>
                      <p className="text-xs">Alumni-S1 Informatika (2018)</p>
                    </div>
                  </div>
                  <button className="btn btn-sm btn-error">
                    <p className="text-xs">Hapus Teman</p>
                  </button>
                </div>
              </div>
              <div className="py-1 mb-6">
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-2">
                    <img
                      className="rounded-lg"
                      width={36}
                      height={36}
                      src={
                        "https://pbs.twimg.com/profile_images/1273248642007089157/GPfXUOJf_400x400.jpg"
                      }
                      alt="profile-picture"
                    />
                    <div className="flex flex-col">
                      <p className="font-medium">
                        Reza Febriansyah{" "}
                        <i className="bx bx-fw bx-badge-check text-primary"></i>
                      </p>
                      <p className="text-xs">Alumni-S1 Informatika (2018)</p>
                    </div>
                  </div>
                  <button className="btn btn-sm btn-error">
                    <p className="text-xs">Hapus Teman</p>
                  </button>
                </div>
              </div>
              <div className="py-1 mb-6">
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-2">
                    <img
                      className="rounded-lg"
                      width={36}
                      height={36}
                      src={
                        "https://pbs.twimg.com/profile_images/1273248642007089157/GPfXUOJf_400x400.jpg"
                      }
                      alt="profile-picture"
                    />
                    <div className="flex flex-col">
                      <p className="font-medium">
                        Reza Febriansyah{" "}
                        <i className="bx bx-fw bx-badge-check text-primary"></i>
                      </p>
                      <p className="text-xs">Alumni-S1 Informatika (2018)</p>
                    </div>
                  </div>
                  <button className="btn btn-sm btn-error">
                    <p className="text-xs">Hapus Teman</p>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </dialog>
        {/* end modal friends */}
      </div>
    </div>
  );
}
