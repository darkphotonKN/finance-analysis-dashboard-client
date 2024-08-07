import Nav from "./nav";

export default function SideBar() {
  return (
    <div className="bg-[#2A2A2A] w-[212px] h-[100vh] p-[16px] border-r border-white/10 flex flex-col items-center gap-2">
      <Nav />
    </div>
  );
}
