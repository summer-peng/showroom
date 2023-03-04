import { formatISO9075, parseISO } from 'date-fns'

export const convertToDateTimeString = (date) => {
  return formatISO9075(date)
}

export const convertToDateString = (data) => {
  return formatISO9075(data, { representation: 'date' })
}

export const parseDateTimeStringToDate = (dateTimeString) => {
  return parseISO(dateTimeString)
}

export const parseDateStringToDate = (dateTimeString) => {
  return parseISO(dateTimeString, { representation: 'date' })
}
