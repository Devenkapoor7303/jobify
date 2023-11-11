import Wrapper from "../assets/wrappers/BigSidebar";
import Navlinks from "./Navlinks";
import Logo from "./logo";
import { useDashboardContext } from "../pages/DashboardLayout";

function BigSidebar() {
  const { showSideBar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSideBar
            ? "sidebar-container"
            : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <Navlinks isBigSideBar />
        </div>
      </div>
    </Wrapper>
  );
}
export default BigSidebar;
