import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import Post from "../../components/post/Post";
import { useEffect, useState } from "react";
import { api } from "../../api";
import { ToastContainer, toast } from "react-toastify";
import BottomNav from "../../components/bottomnav/BottomNav";

export default function HomePage() {
  const user = useSelector((state) => state.user);
  const [posts, setPosts] = useState();
  const [likeFromMe, setLikeFromMe] = useState();

  const getAllPosts = async () => {
    let apipath = `posts/all/${user.id}`;
    try {
      const response = await api.getApi.get(apipath);
      if (response.status === 200) {
        let resp = response.data;
        let getlike = resp.map((post) => {
          return post.like.find((me) => {
            return me.user.id === user.id;
          });
        });
        setLikeFromMe(getlike);
        setPosts(resp);
      }
    } catch (error) {
      toast.error("Ada kesalahan teknis, silahkan coba lagi");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

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
        <div className="px-0 xl:px-60 min-h-screen rounded-xl">
          <p className="text-lg mb-6">
            Selamat datang, <span className="font-bold">{user.name}</span>
          </p>
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
          <div className="list-post flex flex-col gap-3">
            {posts ? (
              posts.map((post, index) => {
                return (
                  <Post
                    key={post.id}
                    postId={post.id}
                    user={post.user}
                    comment={post.comment}
                    like={post.like}
                    image={post.image}
                    content={post.content}
                    date={post.created_at}
                    likeFromMe={likeFromMe[index]}
                    getAllPosts={getAllPosts}
                  />
                );
              })
            ) : (
              <h1>Tunggu sebentar ...</h1>
            )}
          </div>
        </div>
      </section>
      <BottomNav />
    </div>
  );
}
