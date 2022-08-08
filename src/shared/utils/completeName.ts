export function completeName(name: string, lastName?: string): string {
  if (lastName) {
    return `${name} ${lastName}`;
  }
  return name;
}
