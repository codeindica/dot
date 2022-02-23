import { SAVE_STATUS, SAVE_NAME, SAVE_THEME,SAVE_ARCHIVE, REMOVE_ARCHIVE, SAVE_TODO, REMOVE_TODO, SAVE_DONE } from '../actions/types';

const initialState = {
 name: '',
 theme: 1,
 status: 1,
 todoData: [],
 archiveData: [],
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_NAME:
        return {
          ...state,
          name: action.payload,
        };

      case SAVE_STATUS:
        return {
          ...state,
          status: action.payload,
        };

      case SAVE_THEME:
        return {
          ...state,
          theme: action.payload,
        };

      case SAVE_TODO:
        return {
          ...state,
          todoData: [...state.todoData,action.payload],
        };

      case SAVE_ARCHIVE:
        return {
          ...state,
          archiveData: [...state.archiveData,action.payload],
        };

      case REMOVE_TODO:
        const remTodo = state.todoData.filter(item => item.id !== action.payload)
        return {
          ...state,
         todoData: remTodo,
        };

      case REMOVE_ARCHIVE:
        const remArchive = state.archiveData.filter(item => item.id !== action.payload)
        return {
          ...state,
          archiveData: remArchive,
      };

      default:
        return state;
      }
};

export default Reducer;