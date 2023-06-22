/* eslint-disable react/prop-types */
import { ToastContainer, toast } from "react-toastify";
import { api } from "../../api";
import ModalComments from "../modalcomments/ModalComments";
import ModalLikes from "../modallikes/ModalLikes";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Post({
  postId,
  user,
  comment,
  like,
  content,
  image,
  date,
  onDelete,
}) {
  const [post, setPost] = useState();
  const userRedux = useSelector((state) => state.user);

  const getPost = async (postId) => {
    let apipath = `post/${postId}`;
    return await api.getApi
      .get(apipath)
      .then((response) => {
        if (response.status === 200) {
          let resp = response.data;
          setPost(resp);
        }
      })
      .catch(() => {
        toast.error("Ada kesalahan teknis, silahkan refresh ulang");
      });
  };

  const handleDelete = () => {
    onDelete(postId);
  };

  return (
    <div className="post rounded-lg border border-base-300 p-1">
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
      <div className="flex flex-row justify-between items-center">
        <div className="post_head py-1">
          <div className="flex flex-row items-center">
            {user.avatar === null ? (
              <img
                width={36}
                height={36}
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
                width={36}
                height={36}
                tabIndex={0}
                className="rounded-full m-2"
                src={`/images/${"female-profile.png"}`}
                alt="profile-picture"
              />
            )}

            <div className="flex flex-col">
              <p className="font-medium">
                {user.name}{" "}
                {user.verified !== 0 && (
                  <i className="bx bx-fw bxs-badge-check text-success"></i>
                )}
              </p>
              <p className="text-xs">
                {user.status_id !== null && user.status.status}{" "}
                {user.major_id !== null && user.major.major}
              </p>
            </div>
          </div>
        </div>
        {user.id === userRedux.id && (
          <div className="dropdown dropdown-end">
            <i className="bx bx-fw bx-dots-vertical-rounded" tabIndex={0}></i>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-32"
            >
              <li>
                <a className="text-xs" onClick={() => toast.success("Yeay")}>
                  Edit
                </a>
              </li>
              <li>
                <a
                  className="text-xs text-error"
                  onClick={() => handleDelete(postId)}
                >
                  Hapus
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      {image !== null ? (
        <div className="relative w-full h-0" style={{ paddingBottom: "100%" }}>
          <img
            className="absolute top-0 left-0 rounded-lg object-cover w-full h-full"
            src={
              "https://pbs.twimg.com/profile_images/1273248642007089157/GPfXUOJf_400x400.jpg"
            }
            alt="post-picture"
          />
        </div>
      ) : (
        <p className="px-3 text-sm font-semibold">{content}</p>
      )}
      <div className="px-3 py-2">
        <div className="flex flex-row items-center gap-1 py-2">
          <div className="btn btn-sm">
            <i className="bx bx-sm bxs-heart-circle text-primary"></i>
            {like.length}
          </div>
          <label htmlFor="modal_comment" className="btn btn-sm">
            <i className="bx bx-sm bx-message-square-dots"></i>
            {comment.length}
          </label>
        </div>
        <p className="text-xs mb-4">
          Akbar dan 19 lainnya menyukai ini.{" "}
          <label htmlFor="modal_like">
            <span className="text-primary">Lihat disini</span>
          </label>
        </p>
        {image !== null && <p className="text-sm">{content}</p>}
        <p className="text-xs italic mt-4">Jumat, 21 Juni 2023</p>
      </div>

      <input
        type="checkbox"
        id="modal_comment"
        className="modal-toggle"
        onChange={(e) =>
          e.target.checked === false ? setPost() : getPost(postId)
        }
      />
      <ModalComments comment={post?.comment} />
      <input
        type="checkbox"
        id="modal_like"
        className="modal-toggle"
        onChange={(e) =>
          e.target.checked === false ? setPost() : getPost(postId)
        }
      />
      <ModalLikes like={post?.like} />
    </div>
  );
}
