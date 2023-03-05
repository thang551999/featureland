import Community from '@/components/pages/HomePage/Community';
import ContactUs from '@/components/pages/HomePage/Contact';
import DiscoverAreas from '@/components/pages/HomePage/DiscoverAreas';
import HomePageThumbnail from '@/components/pages/HomePage/Thumbnail';
import { ReactElement } from 'react';
import GeneralLayout from '../layout/General';

function HomePage() {
  return (
    <div id="homepage">
      <HomePageThumbnail />
      <DiscoverAreas />
      <Community />
      <ContactUs />
    </div>
  );
}

HomePage.getLayout = (page: ReactElement) => {
  return <GeneralLayout>{page}</GeneralLayout>;
};

export default HomePage;
