const SearchBox = ({ value, onSearch }) => {
  return (
    <div>
      <label>
        <p>Find contacts by name</p>
      </label>
      <input
        type="text"
        value={value}
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Contact name"
      />
    </div>
  );
};

export default SearchBox;
