export function toRupiah(num) {
  if (num) {
    return `Rp${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`
  } else if (num == 0) {
    return `Rp${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`
  }
}

export const toddmmyyyy = function (isoDate) {
  let date
  if (isoDate) {
    date = isoDate.replace(/T.*/, '').split('-').reverse().join('/')
  } else {
    date = '-'
  }
  return date
}

export function convertToFormattedDate(isoDate) {
  function getMonthName(month) {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mei',
      'Jun',
      'Jul',
      'Ags',
      'Sep',
      'Okt',
      'Nov',
      'Des',
    ]
    return monthNames[month]
  }

  const date = new Date(isoDate)
  const day = date.getUTCDate()
  const month = getMonthName(date.getUTCMonth())
  const year = date.getUTCFullYear()

  const formattedDate = `${day} ${month} ${year}`

  return formattedDate
}
