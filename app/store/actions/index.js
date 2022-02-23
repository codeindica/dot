import { REMOVE_ARCHIVE, REMOVE_TODO, SAVE_ARCHIVE, SAVE_NAME, SAVE_STATUS, SAVE_THEME, SAVE_TODO } from './types';

export const saveName = (key) => ({
  type: SAVE_NAME,
  payload: key
});

export const saveStatus=(key)=>({
  type: SAVE_STATUS,
  payload: key
})

export const saveTheme=(key)=>({
  type: SAVE_THEME,
  payload: key
})

export const saveTodo=(key)=>({
  type: SAVE_TODO,
  payload: key
})

export const saveArchive=(key)=>({
  type: SAVE_ARCHIVE,
  payload: key
})

export const removeTodo=(key)=>({
  type: REMOVE_TODO,
  payload: key
})

export const removeArchive=(key)=>({
  type: REMOVE_ARCHIVE,
  payload: key
})