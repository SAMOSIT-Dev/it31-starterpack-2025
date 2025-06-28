function formatDateTime(dateObj) {
  if (!dateObj) return "1000-01-01 00:00:00";

  const y = dateObj.getUTCFullYear();
  const m = String(dateObj.getUTCMonth() + 1).padStart(2, "0");
  const d = String(dateObj.getUTCDate()).padStart(2, "0");

  const h = String(dateObj.getUTCHours()).padStart(2, "0");
  const min = String(dateObj.getUTCMinutes()).padStart(2, "0");
  const s = String(dateObj.getUTCSeconds()).padStart(2, "0");

  return `${y}-${m}-${d} ${h}:${min}:${s}`;
}
module.exports = { formatDateTime };
