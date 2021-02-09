import React from 'react';
import { Link } from 'react-router-dom';

import { usePages } from '../../hooks';

import './index.scss';

export const PagesList = () => {
  const { pages } = usePages();

  return (
    <div className="list">
      {pages.map(({ name, path, id }) => (
        <div key={id} className="page-row">
          {name}
          <Link to={`/${path}`}>{path}</Link>
        </div>
      ))}
    </div>
  );
};
