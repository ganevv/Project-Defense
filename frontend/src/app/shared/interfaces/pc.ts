import { IUser } from "./user";

export interface IPc {
    name: string,
    _id: string,
    cpu: string,
    motherboard: string,
    gpu: string,
    ram: string,
    storage: string,
    powerSupply: string,
    price: number,
    img: string,
    _ownerId: IUser
}