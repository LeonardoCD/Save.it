export function fullName(name: string, lastName?: string): string {
  if (lastName) {
    return `${name} ${lastName}`;
  }
  return name;
}
