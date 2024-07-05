import "./login.css";
import BookLogo from "../../assets/icons/login-page--icon.svg";
import User from "../../assets/icons/user.svg";
import Lock from "../../assets/icons/lock.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Loading } from "../../components/Loading/Loading";
export function Login() {
const [isActive,setIsActive] =useState(false)
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  async function submit(data) {
    setIsActive(true)
    const req = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    const inputData = await req.json().finally(setIsActive(false));
    if (req.ok) {
      navigate("/home");
  localStorage.setItem("token",inputData.token)
    } else {
      alert(inputData.error);
    }
  }
  
  return (
    <main className="login-wrapper">
     {isActive &&<Loading/>}
      <form className="form" onSubmit={handleSubmit(submit)}>
        <div className="logo">
          <BookLogo />
        </div>
        <div className="login-input">
          <User />
          <input
            type="email"
            placeholder="USERNAME"
            // className={isActive?"errorInput":""}
            {...register("email", { required: true })}
            value={"eve.holt@reqres.in"}
          />
        </div>
        <div className="login-input">
          <Lock />
          <input
            type="password"
            placeholder="password"
            {...register("password", { required: true })}
          />
        </div>
        <button>Login</button>
        <p className="errorPassword">Forgot password?</p>
      </form>
    </main>
  );
}
