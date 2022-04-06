import {ADD_SEASON, REMOVE_SEASON, MARK_COMPLETE} from './action.types';

//It is a type of Action, It is not responsible at all that how the action is going to happen, just defining here only.
export const addSeason = season => ({
  type: ADD_SEASON,
  payload: season,
});

export const removeSeason = id => ({
  type: REMOVE_SEASON,
  payload: id,
});

export const markComplete = id => ({
  type: MARK_COMPLETE,
  payload: id,
});
