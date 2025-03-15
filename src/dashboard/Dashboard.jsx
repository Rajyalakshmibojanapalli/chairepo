import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/authSlice";

const Dashboard = () => {
  const data = useSelector((state) => state.authSlice.user);
  const dispatch = useDispatch();
  console.log(data);
  return (
    <div className="pt-[120px]">
      <h1>Dashboard</h1>
      <p>Name: {data.name} </p>
      <p>Name: {data.email} </p>
      <button
        className="bg-[#404040] text-white px-5 py-2 rounded-full hover:bg-[#333333] transition-all duration-300"
        onClick={() => dispatch(logoutUser())}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
