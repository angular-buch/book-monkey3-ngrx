import { Action } from '@ngrx/store';
import { Book } from '../../shared/book';

export enum AdminActionTypes {
  CreateBook = '[Admin] Create Book',
  CreateBookSuccess = '[Admin] Create Book Success',
  UpdateBook = '[Admin] Update Book',
  UpdateBookSuccess = '[Admin] Update Book Success'
}

export class CreateBook implements Action {
  readonly type = AdminActionTypes.CreateBook;
  constructor(public payload: { book: Book }) {}
}

export class CreateBookSuccess implements Action {
  readonly type = AdminActionTypes.CreateBookSuccess;
  constructor(public payload: { book: Book }) {}
}

export class UpdateBook implements Action {
  readonly type = AdminActionTypes.UpdateBook;
  constructor(public payload: { book: Book }) {}
}

export class UpdateBookSuccess implements Action {
  readonly type = AdminActionTypes.UpdateBookSuccess;
  constructor(public payload: { book: Book }) {}
}

export type AdminActions =
  | CreateBook
  | CreateBookSuccess
  | UpdateBook
  | UpdateBookSuccess;
