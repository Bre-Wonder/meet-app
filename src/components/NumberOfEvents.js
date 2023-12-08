import { useState } from 'react';

const NumberOfEvents = () => {
  const [inputValue, setInputValue] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor="eventCountInput"> Event Count: </label>
      <input
        type="text"
        id="eventCountInput"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>

  );

};

export default NumberOfEvents;