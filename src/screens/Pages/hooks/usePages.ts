import { useMemo } from 'react';
import { useDispatchActions, useTypedSelector } from 'src/hooks';
import { actions } from '../redux';

export const usePages = (id?: string) => {
  const pages = useTypedSelector((state) => state.pages);

  const deletePage = useDispatchActions(actions.deletePage.request);

  const page = useMemo(() => pages.find(({ id: i }) => id === i), [pages, id]);

  return { pages, page, deletePage };
};
