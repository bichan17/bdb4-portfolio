import { parseISO, format } from "date-fns";

interface Props {
  dateString: string;
}

const DateFormater = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
};

export default DateFormater;
