import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../../reducers';
import { LoadBook } from '../actions/book.actions';
import { getBookByIsbn } from '../selectors/book.selectors';
import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<Book>;

  constructor(
    private bs: BookStoreService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<State>
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    const isbn = params.get('isbn');

    this.book$ = this.store.pipe(
      select(getBookByIsbn, { isbn })
    );

    this.store.dispatch(new LoadBook({ isbn }));
  }

  getRating(num: number) {
    return new Array(num);
  }

  removeBook() {
    if (confirm('Buch wirklich löschen?')) {
      const isbn = this.route.snapshot.paramMap.get('isbn');
      this.bs.remove(isbn)
        .subscribe(res => this.router.navigate(['../'], { relativeTo: this.route }));
    }
  }
}
