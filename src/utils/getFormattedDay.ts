import { format } from 'date-fns';

export default function getFormattedDay(date: string): string {
  return format(new Date(date), 'dd/MM');
}
