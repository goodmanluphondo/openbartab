export default function (roundsOfDrinks: [], tabTotal: number, peopleSharing: number) {
  let csvContent = "Round,Item,Quantity,Price,Total\n";
  const totalDue = formatPrice(tabTotal);
  const totalPerPerson = formatPrice(tabTotal / peopleSharing);

  roundsOfDrinks.forEach((roundOfDrinks, roundIndex) => {
    roundOfDrinks.forEach((item) => {
      const total = item.price * item.quantity;
      csvContent += `${roundIndex + 1},${item.name},${item.quantity},R ${item.price.toFixed(2)},R ${total.toFixed(2)}\n`;
    });
    csvContent += "\n";
  });

  csvContent += `,,,Total Due,${totalDue}\n`

  if (peopleSharing > 1) {
    csvContent += `,,${peopleSharing},Per Person,${totalPerPerson}\n`
  }

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `openbartab_${new Date().toISOString().slice(0, 10)}.csv`;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
