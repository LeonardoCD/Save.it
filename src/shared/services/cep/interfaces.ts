import { ICepResponse } from "../../interfaces";


export interface ICepRequest {
  sendCep: (cep: string) => Promise<ICepResponse>;
}