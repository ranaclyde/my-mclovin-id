export const formattedDate = (date: string) => {
  if (!date) return
  const timestamp = Date.parse(date)
  // Intl throws a RangeError on NaN (e.g. a half-typed or out-of-range year)
  if (Number.isNaN(timestamp)) return
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(timestamp)
}
