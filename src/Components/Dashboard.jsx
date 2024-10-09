import Header from "./Header";
import Feed from "./Feed";
import SideBar from "./SideBar";

function Dashboard() {
  return (
    <>
      <Header />
      <div className="body container">
        <SideBar />
        <Feed />
      </div>
    </>
  );
}

export default Dashboard;
