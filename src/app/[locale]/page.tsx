import Banner from "@/components/home/Banner";
import Departments from "@/components/home/Departments";
import HomeShortCuts from "@/components/home/HomeShortCuts";
import Welcome from "@/components/home/Welcome";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Banner />
      <HomeShortCuts />
      <Welcome />
      <Departments/>
      <div className="w-full h-[100px]"></div>
    </div>
  );
}
