export interface Address {
    country: string,
    country_code: string,
    province: string,
    'ISO3166-2-lvl4': string
}

export interface CityTheme {
    addresstype: string,
    class: string,
    display_name: string,
    importance:number,
    lat: string,
    licence: string,
    lon: string,
    name: string,
    osm_id: number,
    osm_type: string,
    place_id: number,
    place_rank: number,
    type: string,
    boundingbox: string[],
    address: Address
}

export interface ItemTheme {
    id: number,
    name: string,
    flag: string,
    title: string,
    info: string,
    photo: string,
    text: string,
}