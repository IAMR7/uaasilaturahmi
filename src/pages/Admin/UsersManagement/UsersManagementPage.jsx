import { ToastContainer } from "react-toastify";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";

export default function UsersManagementPage() {
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
      <div className="min-h-screen mt-16 w-full">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          {/* SIDEBAR */}
          <Sidebar />
          {/* END SIDEBAR */}
          <div className="drawer-content">
            <div className="px-4 py-6">
              <label className="block lg:hidden mb-4" htmlFor="my-drawer">
                <div className="btn btn-sm">
                  <i className="bx bx-fw bx-left-arrow-alt"></i> Buka Menu
                </div>
              </label>
              <h1 className="text-lg font-bold">Users Management</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
