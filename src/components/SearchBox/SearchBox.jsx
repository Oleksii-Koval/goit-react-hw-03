import css from "./SearchBox.module.css";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div>
      <p className={css.paragraph}>Find contacts by name</p>
      <BiSearchAlt2 className={css.icon} />
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Contact name"
      />
    </div>
  );
};

export default SearchBox;
