// // tslint:disable-next-line:interface-name
export class Todo {
  constructor(id, title, done) {
    this.id = id;
    this.title = title;
    this.done = done;
  }
}

export const TodosFilter = Object.freeze({
  All: Symbol('all'),
  Completed: Symbol('completed'),
  Active: Symbol('active'),
});
