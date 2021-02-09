import { useCallback } from 'react';
import { useDispatchActions, useTypedSelector } from 'src/hooks';
import { actions } from '../redux';

export const usePageCreation = () => {
  const pages = useTypedSelector((state) => state.pages);

  const pathExists = useCallback(
    (path: string) => {
      return pages.some(({ path: p }) => p === path);
    },
    [pages],
  );

  const createPage = useDispatchActions(actions.createPage.request);

  return { createPage, pathExists };
};
