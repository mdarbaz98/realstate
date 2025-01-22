import MainLayout from "@/components/layout/MainLayout";
import BannerCarousel from "@/components/module/BannerCarousel";
import Gallery from "@/components/module/Gallery";
import HeroDescription from "@/components/module/HeroDescription";
import ImageSlider from "@/components/module/ImageSlider";
import PriceTable from "@/components/module/PriceTable";
import { Grid } from "@chakra-ui/react";

export default function Home() {
  return (
    <MainLayout>
      <Grid spaceY={10}>
        <BannerCarousel />
        <HeroDescription />
        <PriceTable />
        <ImageSlider />
        <Gallery />
      </Grid>
    </MainLayout>
  );
}
