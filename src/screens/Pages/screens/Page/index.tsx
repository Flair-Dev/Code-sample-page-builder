import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { confirmAlert } from 'react-confirm-alert';

import { Button } from 'src/components';
import { usePages } from '../../hooks';

import './index.scss';

type PageProps = {
  id: string;
};

export const Page: React.FC<PageProps> = ({ id }) => {
  const { page, deletePage } = usePages(id);
  const { push } = useHistory();

  const onDelete = useCallback(() => {
    confirmAlert({
      title: 'Are you sure?',
      buttons: [
        {
          label: 'Cancel',
          onClick: () => {
            'Cancel';
          },
        },
        {
          label: 'Delete',
          onClick: () => {
            deletePage(id);
            push('/');
          },
        },
      ],
    });
  }, [id]);

  if (!page) return null;

  const { name, path, category } = page;

  return (
    <div className="container">
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <h1>Page Name: {name}</h1>
      <h2>Path: /{path}</h2>
      {!!category && <h2>Main Category: {category}</h2>}
      <Button
        title="Delete"
        type={'outline'}
        color={'red'}
        onClick={onDelete}
      />
    </div>
  );
};
