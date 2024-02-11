const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    
    let errorText;
    if (inputValue == null || inputValue <= 0 || isNaN(inputValue)) {
      errorText = "Only positive nubmers are allowed"
    } else {
      errorText = ""
    }
    setCurrentNOE(inputValue);
    setErrorAlert(errorText);
  };

  return (
    <div id="event-Count-Input">
      <label htmlFor="event-Count-Input"> Event Count: </label>
      <input
        type="text"
        id="number-of-events-input"
        className="number-of-events-input"
        defaultValue={33}
        onChange={handleInputChange}
        role="textbox"
      />
    </div>

  );

};

export default NumberOfEvents;
