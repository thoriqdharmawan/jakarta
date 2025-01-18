export function getWeekNumber(date) {
  const currentDate = date || new Date()

  const startOfYear = new Date(currentDate.getFullYear(), 0, 1)

  const days = Math.floor((currentDate - startOfYear) / (24 * 60 * 60 * 1000))

  const weekNumber = Math.ceil((days + 1) / 7)

  return weekNumber
}
