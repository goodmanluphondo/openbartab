import jsPDF from 'jspdf';

export default function (roundsOfDrinks: [], tabTotal: number, peopleSharing: number) {
  const doc = new jsPDF();
  const totalDue = formatPrice(tabTotal);
  const totalPerPerson = formatPrice(tabTotal / peopleSharing);

  console.log('totalPerPerson', totalPerPerson);

  let y = 30;

  doc.setFontSize(12);

  doc.text('Open Bar Tab Receipt', 25, y);

  y += 20;

  roundsOfDrinks.forEach((roundOfDrinks) => {
    roundOfDrinks.forEach((item) => {
      const total = item.price * item.quantity;

      doc.setFillColor(255, 255, 255);
      doc.roundedRect(20, y, 170, 15, 3, 3, 'F');

      doc.setTextColor(0, 0, 0);
      doc.text(`${item.quantity} x ${item.name}`, 25, y + 10);
      doc.text(`R ${total.toFixed(2)}`, 170, y + 10, { align: 'right' });

      y += 10;
    });
  });

  if (peopleSharing > 1) {
    y += 10;
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Number of people splitting bill: ${peopleSharing}`, 25, y + 10);
  }

  y += 30;
  doc.setFontSize(14);
  doc.text(`Total Due: ${totalDue}`, 25, y);
  doc.setFontSize(12);

  if (peopleSharing > 1) {
    doc.text(`${totalPerPerson} per person`, 25, y + 10);
  }

  const currentDate = new Date().toTimeString().slice(0, 8).replace(/:/g, '-');
  const filename = `OpenBarTab_${currentDate}.pdf`;

  doc.save(filename);
}
