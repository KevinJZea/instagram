import { randomUUID } from 'crypto';

export function createRandomID(length = 5) {
  return randomUUID().slice(0, length);
}
