# unique-state

## Installation

```bash
$ npm install unique-state --save
```

## Usage

```js
import uniqueState from "unique-state"

const state = {
  str: "string",
  obj: {
    nl: null,
    bool: true
  },
  arr: [
    {
      numb: 5,
      obj: { }
    }
  ]
}

/*
  const state1 = {
    ...state,
    obj: {
      ...state.obj,
      str: "string"
    }
  }

  state1.obj !== state.obj // true

  state1.arr !== state.arr // false
*/

const state1 = uniqueState({
  ...state,
  obj: {
    ...state.obj,
    str: "string"
  }
})

state1.obj !== state.obj // true

state1.arr !== state.arr // true

/*
  const state2 = {
    ...state1,
    arr: [
      ...state1.arr,
      { nl: null }
    ]
  }

  state2.obj !== state1.obj // false

  state2.arr !== state1.arr // true

  state2.arr[0] !== state1.arr[0] // false

  state2.arr[0].obj !== state1.arr[0].obj // false
*/

const state2 = uniqueState({
  ...state1,
  arr: [
    ...state1.arr,
    { nl: null }
  ]
})

state2.obj !== state1.obj // true

state2.arr !== state1.arr // true

state2.arr[0] !== state1.arr[0] // true

state2.arr[0].obj !== state1.arr[0].obj // true
```

---

## See also

[![Freddie Gibbs - Cocaine Parties In L.A.](http://i.imgur.com/3oEmep8.jpg)](https://www.youtube.com/watch?v=lGaVPvWdxrU)