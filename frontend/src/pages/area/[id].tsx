import AreaGeneralInfo from '@/components/pages/AreaDetail/GeneralInfo';
import GeneralLayout from '@/layout/General';
import { ReactElement } from 'react';

function AreaDetail() {
  return (
    <div id="area-detail">
      <AreaGeneralInfo />
    </div>
  );
}

AreaDetail.getLayout = (page: ReactElement) => {
  return <GeneralLayout>{page}</GeneralLayout>;
};

export default AreaDetail;
