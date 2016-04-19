"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = newState;
var OBJECT = "Object";
var ARRAY = "Array";
var WRONG_STATE = new Error("Received state must be an object");

function typeOf(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

function copier(particles) {
  switch (typeOf(particles)) {
    case OBJECT:
      {
        var result = {};

        for (var name in particles) {
          var particle = particles[name];


          result[name] = copier(particle);
        }

        return result;
      }
    case ARRAY:
      {
        var _ret = function () {
          var result = [];

          particles.forEach(function (particle, index) {
            result[index] = copier(particle);
          });

          return {
            v: result
          };
        }();

        if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
      }
    default:
      return particles;
  }
}

function newState(state) {
  if (typeOf(state) === OBJECT) return copier(state);else throw WRONG_STATE;
}