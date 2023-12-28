import "../assets/css/app.css";
import { Footer } from "../components/Footer";
import { SideBar } from "../components/SideBar";
import { TopBar } from "../components/TopBar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div id="wrapper">
      <SideBar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />

          <div className="content-fluid">
            <Outlet/>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default AdminLayout;
