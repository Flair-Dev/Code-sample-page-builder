import { ActionType, createReducer } from 'typesafe-actions';
import actions from './actions';
import { TPages } from 'src/types';
import { getPages } from '../../../utils/localStorage';

export type State = TPages;

type Action = ActionType<typeof actions>;

const pages = createReducer<State, Action>(getPages())
  .handleAction(actions.createPage.success, (state, { payload }) =>
    state.concat([payload]),
  )
  .handleAction(actions.deletePage.success, (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  );

export default pages;
