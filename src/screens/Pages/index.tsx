import React from 'react';

import { PageCreation } from './components/PageCreation';
import { PagesList } from './components/PagesList';

import './index.scss';

export const Pages = () => {
  return (
    <div className="container">
      <PageCreation />
      <PagesList />
    </div>
  );
};
