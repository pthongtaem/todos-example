import {
  VisibilityFilters,
  VisibilityFilterTypes,
  SET_VISIBILITY_FILTER,
} from './types/visibilityFilter';

const visibilityFilter = (
  state: VisibilityFilters = VisibilityFilters.SHOW_ALL,
  action: VisibilityFilterTypes,
) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payloads.filter;
    default:
      return state;
  }
};

export default visibilityFilter;

export const setVisibilityFilter = (filter: VisibilityFilters) => ({
  type: SET_VISIBILITY_FILTER,
  payloads: { filter },
});
