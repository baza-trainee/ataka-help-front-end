import UserLayout from "@/components/UserLayout";
import Slider from "@/components/Slider";
import About from "@/components/About";
import PartnersGallery from "@/components/PartnersGallery";

export default function Cases() {
  return (
    <UserLayout title="About">
      <Slider />
      <About />
      <PartnersGallery />
    </UserLayout>
  );
}
