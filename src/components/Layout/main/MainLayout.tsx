import MyHeader from "../Header/MyHeader";
import MyFooter from "../Footer/MyFooter";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <MyHeader></MyHeader>
      <Outlet />
      <MyFooter></MyFooter>
    </div>
  );
};
export default MainLayout;
