import { SkeletonComponents } from "@/components";
import React from "react";

const LoadingPage = () => {
  return (
    <div className=" grid grid-cols-3 gap-10">
      {"abcdefghi".split("").map((i) => (
        <SkeletonComponents key={i} />
      ))}
    </div>
  );
};

export default LoadingPage;
