export function normalizeTelephone(telephone: string): string {
  return telephone
    .replace(/\s+/g, "")
    .replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
}


export function normalizeCep(cep: string): string {
  return cep
    .replace(/\s+/g, "")
    .replace(/^(\d\d)(\d{3})(\d{3}).*/, "$1.$2-$3");
}
