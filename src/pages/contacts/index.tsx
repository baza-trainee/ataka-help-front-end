import type { NextPage } from 'next';

import UserLayout from '@/components/UserLayout/UserLayout';
import FeedbackForm from '@/components/FeedbackForm';

const Contacts: NextPage = () => {
  return (
    <UserLayout title={'Contacts'}>
      <FeedbackForm />
    </UserLayout>
  );
};

export default Contacts;
