import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './script.js';

test('capitalizes string', () => {
  expect(capitalize('amsterdam')).toBe('Amsterdam');
});

test('reverses string', () => {
  expect(reverseString('amsterdam')).toBe('madretsma');
});

test('does calculation', () => {
  expect(calculator.add(4, 2)).toBe(6);
  expect(calculator.subtract(4, 2)).toBe(2);
  expect(calculator.multiply(4, 2)).toBe(8);
  expect(calculator.divide(4, 2)).toBe(2);
});

test('analayzes array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('caesar cipher', () => {
  expect(caesarCipher('amsterdam')).toBe('bntufsebn');
  expect(caesarCipher('AmsTerdam')).toBe('BntUfsebn');
  expect(caesarCipher('z')).toBe('a');
  expect(caesarCipher('amsterdam.s')).toBe('bntufsebn.t');
});
