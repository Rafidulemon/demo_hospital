import Banner from "@/components/home/Banner";
import Departments from "@/components/home/Departments";
import Doctors from "@/components/home/Doctors";
import HomeShortCuts from "@/components/home/HomeShortCuts";
import News from "@/components/home/News";
import Welcome from "@/components/home/Welcome";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Banner />
      <HomeShortCuts />
      <Welcome />
      <Doctors />
      <Departments/>
      <News/>
    </div>
  );
}
