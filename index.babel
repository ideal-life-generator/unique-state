const OBJECT = "Object"
const ARRAY = "Array"
const WRONG_STATE = new Error("Received state must be an object")

function typeOf (data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}

function copier (particles) {
  switch (typeOf(particles)) {
    case OBJECT: {
      let result = { }

      for (const name in particles) {
        const { [ name ]: particle } = particles

        result[ name ] = copier(particle)
      }

      return result
    }
    case ARRAY: {
      let result = [ ]

      particles.forEach((particle, index) => {
        result[ index ] = copier(particle)
      })

      return result
    }
    default:
      return particles
  }
}

export default function newState (state) {
  if (typeOf(state) === OBJECT) return copier(state)
  else throw WRONG_STATE
}