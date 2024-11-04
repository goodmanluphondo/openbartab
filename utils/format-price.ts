export default function (price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price).replace("ZAR", "R");
}
