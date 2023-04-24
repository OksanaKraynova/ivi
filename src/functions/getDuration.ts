export function getDuration(type: string, duration: number): string {
  if (type !== "Фильм")
    return `${duration} сезонов`;
  const minutes: number = duration % 60;
  const hours: number = Math.round((duration - minutes) / 60);
  if (hours > 0)
    return `${hours} ч. ${minutes} мин.`;
  return `${duration} мин.`;
}