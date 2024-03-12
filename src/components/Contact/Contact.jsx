import { BiSolidUser } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import css from "./Contact.module.css";

const Contact = ({ data, onDelete }) => {
  return (
    <div className={css.container}>
      <BiSolidUser />
      <p>{data.name}</p>
      <p>{data.number}</p>

      <button className={css.btn} onClick={() => onDelete(data.id)}>
        <MdDelete />
        Delete
      </button>
    </div>
  );
};

export default Contact;
