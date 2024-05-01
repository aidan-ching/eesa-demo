
import SideNav from "@/app/(overview)/ui/sidenav";
import Header from "@/app/(overview)/ui/Header";

export default function Layout({ children }) {
  return (
    <div>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex flex-col w-full h-full">
          <Header className="w-full" />
          {children}
        </div>
      </div>
    </div>
  );
}
