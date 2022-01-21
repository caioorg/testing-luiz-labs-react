import { PlainObject } from '../types/common'

export const get = (name: string): any => localStorage.getItem(name)

export const remove = (name: string): void => localStorage.removeItem(name)

export const save = (name: string, value: PlainObject): void =>
  localStorage.setItem(name, JSON.stringify(value))

export const toObject = (value: string): PlainObject => {
  try {
    return JSON.parse(value)
  } catch (e) {
    return {}
  }
}

export const getObjectToken = (value: string): PlainObject =>
  toObject(get(value) || value)

export default {
  get,
  save,
  remove,
  toObject,
  getObjectToken,
}