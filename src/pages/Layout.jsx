import { Outlet } from "react-router-dom";
import { Header, PageTransition, StairTransition } from "../components";
const Layout = () => {
  return (
    <>
      <Header />
      <StairTransition />
      <PageTransition>
        <Outlet />
      </PageTransition>
    </>
  );
};
export default Layout;
