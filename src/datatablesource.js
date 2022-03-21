export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    with: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
];
[
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
    uername: "Snow",
    img: "../../asset/avatar2.jpg",
    status: "active",
    email: "snow@gmail.com",
    age: 25,
  },
  {
    id: 2,
    uername: "Jackson Ndi",
    ig: "../../asset/avatar4.jpg",
    eail: "jackson@gmail.com",
    ae: 45,
  },
  {
    id: 3,
    uername: "Enow White",
    img: "../../asset/avatar5.jpg",
    email: "enowwhite@gmail.com",
    age: 30,
  },
  {
    id: 4,
    uername: "Anderson Millo",
    img: "../../asset/avatar7.jpg",
    email: "andersonmillo@gmail.com",
    ae: 35,
  },
  {
    id: 5,
    username: "Michael Spark",
    age: "../../asset/avatar3.jpg",
    email: "sparkmichael@gmail.com",
    age: 28,
  },
  {
    id: 6,
    username: "Golden Walman",
    img: "../../asset/avatar5.jpg",
    mail: "goldenwalman@gmail.com",
    age: 50,
  },
  {
    id: 7,
    username: "Lamson Arrey",
    age: "../../asset/course11.jpg",
    email: "lamsonarrey@gmail.com",
    age: 25,
  },
];
