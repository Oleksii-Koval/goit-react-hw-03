const Contact = ({ data, onDelete }) => {
  return (
    <div>
      <ul>
        <p>{data.name}</p>
        <p>{data.number}</p>
      </ul>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
