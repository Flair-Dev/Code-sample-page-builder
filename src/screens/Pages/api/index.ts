import { TBasePage } from '../../../types';
import { addPage, deletePage } from 'src/utils/localStorage';

class PagesAPI {
  createPage = async (page: TBasePage) => {
    const newPage = {
      ...page,
      id: Math.random().toString(32),
    };

    addPage(newPage);

    return newPage;
  };

  deletePage = async (id: string) => {
    deletePage(id);

    return id;
  };
}

export default new PagesAPI();
