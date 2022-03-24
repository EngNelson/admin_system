import course from "../src/components/assets/course1.jpg";
import course11 from "../src/components/assets/course11.jpg";
import course10 from "../src/components/assets/course10.jpg";
import course15 from "../src/components/assets/course15.jpg";
import course13 from "../src/components/assets/course13.jpg";
import course17 from "../src/components/assets/course17.jpg";
import course18 from "../src/components/assets/course18.jpg";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "username",
    headerName: "UserName",
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
  {
    field: "username",
    headerName: "UserName",
    width: 230,
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
    username: "Snow Promise",
    img: course,
    status: "active",
    email: "snow@gmail.com",
    age: 25,
  },
  {
    id: 2,
    username: "Jackson Ndi",
    status: "pending",
    img: course11,
    email: "jackson@gmail.com",
    age: 45,
  },
  {
    id: 3,
    username: "Enow White",
    status: "passive",
    img: course10,
    email: "enowwhite@gmail.com",
    age: 30,
  },
  {
    id: 4,
    username: "Anderson Millo",
    status: "active",
    img: course15,
    email: "andersonmillo@gmail.com",
    age: 35,
  },
  {
    id: 5,
    username: "Michael Spark",
    status: "passive",
    img: course13,
    email: "sparkmichael@gmail.com",
    age: 28,
  },
  {
    id: 6,
    username: "Golden Walman",
    status: "pending",
    img: course17,
    email: "goldenwalman@gmail.com",
    age: 50,
  },
  {
    id: 7,
    username: "Lamson Arrey",
    status: "active",
    img: course18,
    email: "lamsonarrey@gmail.com",
    age: 30,
  },
];
