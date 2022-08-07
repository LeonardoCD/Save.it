import { ICepResponse } from "../../interfaces";
import { api } from "../axios.config";
import { ICepRequest } from "./interfaces";

export const cep = (): ICepRequest => {
  async function sendCep(cep: string): Promise<ICepResponse> {
    return api.get(`/${cep}/json/`);
  }

  return { sendCep };
};
