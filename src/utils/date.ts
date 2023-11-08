import { format, parseISO } from 'date-fns';

export function formatDate(dateString: string, customFormat = 'yyyy.MM.dd') {
  const date = parseISO(dateString);
  return format(date, customFormat);
}
