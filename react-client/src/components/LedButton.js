import React, { useState } from 'react';

function LedButton() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = async () => {
    setIsOn(!isOn);
    try {
      const response = await fetch(`http://10.0.0.106/led/${isOn ? 'off' : 'on'}`);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={handleClick}>
      {isOn ? 'Turn Off' : 'Turn On'}
    </button>
  );
}

export default LedButton;