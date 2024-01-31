import React from "react";

function SkeletonEffect() {
  return (
    <div className="flex flex-col gap-3">
      <div className="h-[20px] w-[400px] bg-slate-200 animate-pulse"></div>
      <div className="h-[20px] w-[70px] mt-3 bg-slate-200 animate-pulse"></div>
      <div className="h-[100px] w-[500px] mt-3 bg-slate-200 animate-pulse"></div>
      <div className="h-[50px] w-[150px] mt-3 bg-slate-200 animate-pulse"></div>
      <div className="h-[50px] w-[200px] mt-3 bg-slate-200 animate-pulse"></div>
    </div>
  );
}

export default SkeletonEffect;
