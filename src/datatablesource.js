export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    with: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />{" "}
          {params.row.username}{" "}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
// temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "",
    email: "2snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Snow",
    img: "",
    email: "2snow@gmail.com",
    age: 35,
  },
  {
    id: 3,
    username: "Snow",
    img: "",
    email: "2snow@gmail.com",
    age: 35,
  },
  {
    id: 4,
    username: "Snow",
    img: "",
    email: "2snow@gmail.com",
    age: 35,
  },
  {
    id: 5,
    username: "Snow",
    img: "",
    email: "2snow@gmail.com",
    age: 35,
  },
  {
    id: 6,
    username: "Snow",
    img: "",
    email: "2snow@gmail.com",
    age: 35,
  },
  {
    id: 7,
    username: "Snow",
    img: "",
    email: "2snow@gmail.com",
    age: 35,
  },
];
