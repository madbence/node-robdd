# node-robdd

[Reduced Ordered Binary Decisions Diagrams](http://en.wikipedia.org/wiki/Binary_decision_diagram) in js.

ROBDD's are used to represent boolean functions (sets), and perform various logical operation on them directly.

```js
function f(a, b, c, d) {
  return ((a && b) || (!a && !b)) && ((c && d) || (!c && !d));
}
```

Here `f` is a boolean function, `robdd` can turn this function into a compressed tree (*Reduced*)
with variable ordering `abcd` (*Ordered*).

## Todo

*Implement `∧` and `∨`*

## License

MIT
