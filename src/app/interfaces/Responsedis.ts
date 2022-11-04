export interface Responsedis{
  head?: any,
  results:{bindings: Triples[]}
}

export interface Triples{
  lng: {datatype: string, type: string, value: number},
  lat: {datatype: string, type: string, value: number},
  estacion: {type: string, value: string},
}