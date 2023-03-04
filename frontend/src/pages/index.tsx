import HomePageThumbnail from '@/components/pages/HomePage/Thumbnail';
import { ReactElement } from 'react';
import GeneralLayout from '../layout/General';

function HomePage() {
  return (
    <>
      <HomePageThumbnail />
    </>
  );
}

HomePage.getLayout = (page: ReactElement) => {
  return <GeneralLayout>{page}</GeneralLayout>;
};

export default HomePage;
