import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1170621,
      product: " Acer Nitro 5",
      img: "../assets/course2.jpg",
      customer: "Johnson Cow",
      date: "4 May",
      amount: 7430,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 5147630,
      product: " Playstation 5",
      img: "../assets/course3.jpg",
      customer: "Larry Spark",
      date: "2 Febuary",
      amount: 2000,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 8407632,
      product: " ASUS ROG Strix",
      img: "../assets/course11.jpg",
      customer: "Harold Carol",
      date: "4 June",
      amount: 6000,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2447630,
      product: " Play Bag",
      img: "../assets/course14.svg",
      customer: "Scarlet White",
      date: "20 Jenuary",
      amount: 12000,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 7007630,
      product: " LapTops and Phones",
      img: "../assets/course8.svg",
      customer: "Nassah Kuma",
      date: "13 April",
      amount: 1000,
      method: "Online Payement",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="image" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status  ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
