import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        {/* 顶部 */}
        <div className="absolute top-0 w-full -translate-y-[60%] z-[-1] pb-1 bg-[#313131] rounded-md px-8 text-sm text-white font-medium">
          <div>RICHO</div>
        </div>
        <div className="flex p-1 bg-[#313131] rounded-xl relative z-10">
          {/* 屏幕空间 */}
          <div className="aspect-[3/2] w-[400px] bg-[#303030] border-[20px] border-r-[40px] box-content border-[#0F0F0F] rounded-md">
            <Outlet />
          </div>
          {/* 右部操作空间 */}
        </div>
      </div>
    </div>
  );
}
