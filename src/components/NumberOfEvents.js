const NumberOfEvents = ({ setCurrentNOE }) => {

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setCurrentNOE(inputValue);
  };

  return (
    <div id="event-Count-Input">
      <label htmlFor="event-Count-Input"> Event Count: </label>
      <input
        type="text"
        defaultValue={33}
        onChange={handleInputChange}
        role="textbox"
      />
    </div>

  );

};

export default NumberOfEvents;
