import { createReducer, on, Action } from '@ngrx/store';

import { Book } from '../../shared/book';
import * as BookActions from '../actions/book.actions';
import * as AdminActions from '../../admin/actions/admin.actions';

export interface State {
  books: Book[];
  loading: boolean;
}

export const initialState: State = {
  books: [],
  loading: false
};


const bookReducer = createReducer(
  initialState,

  on(BookActions.loadBooks, state => {
    return {
      ...state,
      loading: true
    };
  }),

  on(BookActions.loadBooksSuccess, (state, action) => {
    return {
      ...state,
      books: action.books,
      loading: false
    };
  }),

  on(BookActions.loadBookSuccess, (state, action) => {
    const { book } = action;

    const books = [
      ...state.books.filter(b => b.isbn !== book.isbn),
      book
    ];

    return { ...state, books };
  }),

  on(BookActions.deleteBookSuccess, (state, action) => {
    return {
      ...state,
      books: state.books.filter(
        b => b.isbn !== action.isbn
      )
    };
  }),

  on(AdminActions.createBookSuccess, (state, action) => {
    const { book } = action;
    const books = [...state.books, book];

    return { ...state, books };
  }),

  on(AdminActions.updateBookSuccess, (state, action) => {
    const { book } = action;
    const books = state.books.map(b => b.isbn === book.isbn ? book : b);

    return { ...state, books };
  })

);

export function reducer(state: State | undefined, action: Action): State {
  return bookReducer(state, action);
}
