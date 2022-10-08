import moment from "moment";

export const formatDate = (date: moment.MomentInput, format?: string) => {
  return moment(date).format(format ?? "DD MMMM YYYY");
};
