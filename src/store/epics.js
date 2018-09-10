import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { fetchTodos } from './actions';

const requestSettings = {
  url: 'http://localhost:8080/todos',
  crossDomain: true,
  body: {},
  headers: { 'Content-Type': 'application/hal+json; charset=UTF-8' },
  responseType: 'json',
};

const fetchTodosEpic = action$ =>
  action$.pipe(
    filter(isActionOf(fetchTodos.request)),
    switchMap(() =>
      ajax(requestSettings).pipe(
        tap(console.log),
        map(fetchTodos.success),
        catchError(err => of(fetchTodos.failure(err))),
      ),
    ),
  );

export default fetchTodosEpic;
