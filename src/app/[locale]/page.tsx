import { FaHospital, FaStethoscope, FaUserMd, FaCalendarAlt } from "react-icons/fa";
import Banner from "@/components/home/Banner";
import HomeShortCuts from "@/components/home/HomeShortCuts";


export default function Home() {
  
  return (
    <div className="w-full flex flex-col items-center">
      <Banner />
      <HomeShortCuts />
    </div>
  );
}
