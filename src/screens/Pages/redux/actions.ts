import { createAsyncAction } from 'typesafe-actions';
import { getAsyncTypes } from 'src/redux/getAsyncTypes';
import { TBasePage, TPage } from 'src/types';

export default {
  createPage: createAsyncAction(...getAsyncTypes('CREATE_PAGE'))<
    TBasePage,
    TPage,
    null
  >(),

  deletePage: createAsyncAction(...getAsyncTypes('DELETE_PAGE'))<
    string,
    string,
    null
  >(),
};
