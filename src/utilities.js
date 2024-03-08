export function formatBytes(bytes) {
  if (typeof bytes !== "number") return "";

  const oneGigabyte = 1024 * 1024 * 1024; 
  if (bytes >= oneGigabyte) {
    return (bytes / oneGigabyte).toFixed(2) + " GB"; 
  } else {
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  }
}

export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  if (isNaN(date)) return "N/A";
  return date.toLocaleDateString("en-US", options);
};

export function formatToThousandth(value, locale = "en-US") {
  return new Intl.NumberFormat(locale).format(value);
}
