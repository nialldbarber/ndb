export function getCurrentYear(): number {
  const date: Date = new Date();
  return date.getFullYear();
}

export const FORM_ENDPOINT: string = 'https://formspree.io/f/myyboyrl';
