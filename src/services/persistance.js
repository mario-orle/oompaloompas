import storage from '../storage/storage'

const persist = (key, value) => {
  storage.set(key, value)
}

const get = key => {
  return storage.get(key)
}

const clear = () => {
  storage.clear()
}

const remove = key => {
  storage.remove(key)
}

const isEmpty = key => {
  return !get(key) || get(key) === 'undefined'
}
export const persistance = {
  persist,
  get,
  remove,
  clear,
  isEmpty
}
