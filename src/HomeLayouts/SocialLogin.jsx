import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
const SocialLogin = () => {
  return (
    <div className="space-y-3">
      <h2 className="font-bold">Login With</h2>
      <div className="space-y-3">

         <button className="btn btn-outline btn-secondary w-full"> <FcGoogle size={25} />Login With Google</button>
         <button className="btn btn-outline btn-primary w-full"> <SiGithub size={25} />Login With GitHub</button>
      </div>
    </div>
  );
};

export default SocialLogin;
