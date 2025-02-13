import CreateProject from '@/components/CreateProject';
import authOptions from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react';

const CreateProjectPage = async() => {
  const seasons = await getServerSession(authOptions);
  console.log(seasons);
  return (
    <div>
      <CreateProject seasons={seasons}></CreateProject>
    </div>
  );
};

export default CreateProjectPage;