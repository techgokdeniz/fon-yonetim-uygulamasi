import React from "react";
import HomeAnimationJson from "@/mocks/mainanimation.json";
import Lottie from "lottie-react";

const HomeAnimation = () => {
  return (
    <div className="w-[500px]">
      <Lottie animationData={HomeAnimationJson} />
    </div>
  );
};

export default HomeAnimation;
