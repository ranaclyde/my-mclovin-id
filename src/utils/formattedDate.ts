export const formattedDate = (date: string) => {
  if (!date) return
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(Date.parse(date))
}
