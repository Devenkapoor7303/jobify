import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";
import Logo from "./logo";
import Navlinks from "./Navlinks";

function SmallSidebar() {
  const { showSideBar, toggleSideBar } = useDashboardContext();
  
  return (
    <Wrapper>
      <div
        className={
          showSideBar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSideBar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <Navlinks/>
        </div>
      </div>
    </Wrapper>
  );
}
export default SmallSidebar