import AboutMe from "@/components/shared/AboutMe";
import Banner from "@/components/shared/Banner";
import FeaturedProjects from "@/components/shared/FeacherdProjects/FeaturedProjects";
import MySkills from "@/components/shared/MySkills";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <FeaturedProjects></FeaturedProjects>
      <AboutMe></AboutMe>
      <MySkills></MySkills>
    </div>
  );
}
