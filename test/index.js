import {
  throws,
  deepStrictEqual,
  ifError
} from "assert"
import newState from "../"

describe("newState()", () => {
  const obj = {
    obj: { },
    arr: [ ],
    str: "string",
    numr: 0,
    bool: true,
    nl: null,
    und: undefined
  }
  const arr = [
    { },
    [ ],
    "string",
    0,
    true,
    null,
    undefined
  ]
  const lvl1State = {
    ...obj
  }
  const lvl2State = {
    obj: {
      ...obj
    },
    arr: [
      ...arr
    ]
  }

  it("Wrong state", () => {
    throws(() => {
      newState()
    }),
    Error
  })

  it("Succes", () => {
    newState({ })
  })

  describe("Lvl 1", () => {
    const state = newState(lvl1State)
    const {
      obj: stateObj,
      arr: stateArr
    } = state
    const {
      obj: lvl1Obj,
      arr: lvl1Arr
    } = lvl1State

    it("Equal", () => {
      deepStrictEqual(state, obj)
    })

    it("Object", () => {
      ifError(stateObj === lvl1Obj)
    })

    it("Array", () => {
      ifError(stateArr === lvl1Arr)
    })
  })

  describe("Lvl 2", () => {
    const state = newState(lvl2State)
    const {
      obj: {
        obj: stateObjInObj,
        arr: stateArrInObj
      },
      arr: [
        stateObjInArr,
        stateArrInArr
      ]
    } = state
    const {
      obj: {
        obj: lvl2ObjInObj,
        arr: lvl2ArrInObj
      },
      arr: [
        lvl2ObjInArr,
        lvl2ArrInArr
      ]
    } = lvl2State

    it("Equal", () => {
      deepStrictEqual(state, lvl2State)
    })

    it("Object in object", () => {
      ifError(stateObjInObj === lvl2ObjInObj)
    })

    it("Array in object", () => {
      ifError(stateArrInObj === lvl2ArrInObj)
    })

    it("Object in array", () => {
      ifError(stateObjInArr === lvl2ObjInArr)
    })

    it("Array in array", () => {
      ifError(stateArrInArr === lvl2ArrInArr)
    })
  })
})