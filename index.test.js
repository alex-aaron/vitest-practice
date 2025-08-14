import { add } from './index';
import { describe, expect, assert, test } from 'vitest';

describe("add()", () => {
  test('should accurately add two number inputs', () => {
    expect(add(1, 3)).toBe(4);
  });
  test('should work with missing input', () => {
    expect(add(1)).toBe(1);
  })
})