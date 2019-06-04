import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book } from '../../shared/book';
import { State } from '../../reducers';
import { CreateBook } from '../actions/admin.actions';

@Component({
  selector: 'bm-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  createBook(book: Book) {
    this.store.dispatch(new CreateBook({ book }));
  }

}
