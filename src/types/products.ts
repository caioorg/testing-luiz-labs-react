export interface IProducts {
  availableSizes: {S: 100, G: 5, GG: 120, GGG: 12}
  currencyFormat: string
  currencyId: string
  description: string
  favorite: boolean
  id: number
  image: string
  installments: number
  isFreeShipping: boolean
  price: number
  sku: number
  style: string
  title: string
}
export interface IResponseGetAllProducts {
  products: IProducts[]
}