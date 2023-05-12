import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "./UserReducer";

export default function UpdateUser() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((user) => user.id == id);
  const { name, email, phone, books } = existingUser[0];

  const [uname, setUname] = useState(name);
    const [uemail, setUemail] = useState(email);
    const [uphone, setUphone] = useState(phone);
    const [ubooks, setUbooks] = useState(books);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser({ id, name: uname, email: uemail, phone: uphone, books: ubooks }));
        navigate("/");
    };


  return (
    <div>
      <h1>Update User</h1>

      {/* form to get user details */}
      <form onSubmit={handleUpdate}>
        <label>Name</label>
        <input type="text" name="name" value ={uname} onChange={e=>setUname(e.target.value)}/>
        <br />
        <br />
        <label>Email</label>
        <input type="email" name="email" value={uemail} onChange={e=>setUemail(e.target.value)} />
        <br />
        <br />
        <label>Phone Number</label>
        <input type="text" name="phone" value={uphone} onChange={e=>setUphone(e.target.value)} />
        <br />
        <br />
        <label>Books</label>
        <input type="text" name="books" value={ubooks} onChange={e=>setUbooks(e.target.value)}/>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
