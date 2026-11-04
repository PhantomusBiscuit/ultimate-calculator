import { create, all, docs } from './mathjs.js';
window.math = create(all);
window.math.docs = docs;
Object.defineProperty(math, Symbol.toStringTag, {
  value: 'MathJSInstance',
  enumerable: false,
  configurable: false,
});
console.debug(
  '%cmath%c library is imported at %c%s%cs',
  'background: canvas; padding: 1.5px 6px; border-radius: 4px;\
  display: inline-block; direction: ltr !important;', '',
  'background: canvas; padding: 1.5px 6px; border-radius: 4px;\
  display: inline-block; direction: ltr !important;', (performance.now() / 1000).toFixed(4).padStart(10), ''
);
