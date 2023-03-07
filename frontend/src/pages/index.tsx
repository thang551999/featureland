import { ReactElement } from 'react';
import Community from '@/components/pages/HomePage/Community';
import DiscoverAreas from '@/components/DiscoverAreas';
import HomePageThumbnail from '@/components/pages/HomePage/Thumbnail';
import GeneralLayout from '../layout/General';

function HomePage() {
  return (
    <div id="homepage">
      <HomePageThumbnail />
      <DiscoverAreas />
      <Community />
      {/* <AboutTeams />
      <ContactUs /> */}
    </div>
  );
}

HomePage.getLayout = (page: ReactElement) => {
  return <GeneralLayout>{page}</GeneralLayout>;
};

export default HomePage;
