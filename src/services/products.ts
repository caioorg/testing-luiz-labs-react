import { api } from './api'
import { ResponseCustom } from '../types/response'
import { IResponseGetAllProducts } from '../types/products'
import config from '../config'

export const getAllProducts = async (): Promise<ResponseCustom<IResponseGetAllProducts>> => {
  try {
    return await api(`${config.baseUrlApi}`).get('/66063904-d43c-49ed-9329-d69ad44b885e')
  } catch (error) {
    return Promise.reject(error)
  }
}