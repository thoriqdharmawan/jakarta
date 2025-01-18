export function getWeekNumber(date) {
  const currentDate = date || new Date()

  const startOfYear = new Date(currentDate.getFullYear(), 0, 1)

  const days = Math.floor((currentDate - startOfYear) / (24 * 60 * 60 * 1000))

  const weekNumber = Math.ceil((days + 1) / 7)

  return weekNumber
}

export function formatDate(date) {
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ]

  const d = new Date(date)

  const day = String(d.getDate()).padStart(2, '0')
  const month = months[d.getMonth()]
  const year = d.getFullYear()

  return `${day} ${month} ${year}`
}
