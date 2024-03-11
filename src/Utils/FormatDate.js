import { format } from "date-fns";
export const formatDate = (date) => {
  try {
    return format(new Date(date), "dd/MM/yyyy");
  } catch (error) {
    console.log(error);
  }
};
