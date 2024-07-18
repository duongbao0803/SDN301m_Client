export const validatePhoneNumber = (_: unknown, value: string) => {
  const phoneNumberPattern = /^[0-9]{10}$/;
  if (value && !phoneNumberPattern.test(value)) {
    return Promise.reject(new Error("Phone number must be exactly 10 digits"));
  }
  return Promise.resolve();
};

export function formatDate(dateString: string | number | Date) {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "Invalid date";
  } else {
    const timezoneOffset = date.getTimezoneOffset() * 60000;
    const localTime = date.getTime() - timezoneOffset;
    const localDate = new Date(localTime);

    const year = localDate.getFullYear();
    const month = (localDate.getMonth() + 1).toString().padStart(2, "0");
    const day = localDate.getDate().toString().padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
}

export const formatDateFromString = (dateString: string | undefined) => {
  const year = dateString?.slice(0, 4);
  const month = dateString?.slice(4, 6);
  const day = dateString?.slice(6, 8);
  const hours = dateString?.slice(8, 10);
  const minutes = dateString?.slice(10, 12);
  const seconds = dateString?.slice(12, 14);

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

export const PriceFormat = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
