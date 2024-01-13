const NumberOfEvents = ({ setCurrentNumber }) => {

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setCurrentNumber(inputValue);
  };

  return (
    <div>
      <label htmlFor="eventCountInput"> Event Count: </label>
      <input
        type="text"
        id="event-Count-Input"
        value={32}
        onChange={handleInputChange}
        role="textbox"
      />
    </div>

  );

};

export default NumberOfEvents;
