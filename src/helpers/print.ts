import { inspect } from 'util';

export function fullObj(obj, color = false) {
  return inspect(obj, false, null, color);
}