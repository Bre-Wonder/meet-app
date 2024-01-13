const NumberOfEvents = ({ setCurrentNumber }) => {

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setCurrentNumber(inputValue);
  };

  return (
    <div id="event-Count-Input">
      <label htmlFor="event-Count-Input"> Event Count: </label>
      <input
        type="text"
        value={33}
        onChange={handleInputChange}
        role="textbox"
      />
    </div>

  );

};

export default NumberOfEvents;
