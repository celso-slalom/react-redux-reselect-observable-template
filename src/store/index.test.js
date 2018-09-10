import { getType } from 'typesafe-actions';
import * as todos from './actions';

describe('actions', () => {
  it('should create action add todo', () => {
    const title = 'test todo add';
    const action = todos.add({ title });
    expect(action.type).toEqual(getType(todos.add));
    expect(action.payload.title).toEqual(title);
    expect(action.payload.id).toBeDefined();
    expect(action.payload.done).toBeFalsy();
  });
});
