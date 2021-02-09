import { all } from 'redux-saga/effects';

import { makeApiCall } from 'src/redux/makeApiCall';

import PagesAPI from '../api';
import actions from './actions';

export default function* () {
  yield all([
    makeApiCall(actions.createPage, PagesAPI.createPage),
    makeApiCall(actions.deletePage, PagesAPI.deletePage),
  ]);
}
