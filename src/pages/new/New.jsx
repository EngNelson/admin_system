import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="" alt="avatar" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="nelson_bechem" />
              </div>
              <div className="formInput">
                <label>Name and surname</label>
                <input type="text" placeholder="Nelson Bechem" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="nelson_bechem@gmail.com" />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="+237 678251082" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Buea_Cameroon" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="Cameroon" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
