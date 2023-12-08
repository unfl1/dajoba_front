import React from 'react';

function Checkbox({ checkboxNames = [], selectedCheckboxes = [], onCheckboxChange }) {
  const handleCheckboxChange = (checkboxName) => {
    // selectedCheckboxes와 checkboxNames가 정의되어 있을 때에만 동작
    if (selectedCheckboxes && checkboxNames) {
      const updatedCheckboxes = selectedCheckboxes.includes(checkboxName)
        ? selectedCheckboxes.filter((name) => name !== checkboxName)
        : [...selectedCheckboxes, checkboxName];
      onCheckboxChange(updatedCheckboxes);
    }
  };

  return (
    <div className="flex flex-wrap">
      {checkboxNames.map((checkboxName, index) => (
        <div key={index} className="mb-[0.25rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
          <input
            className="... (테일윈드 CSS 클래스 삽입)"
            type="checkbox"
            id={`inlineCheckbox${index}`}
            checked={selectedCheckboxes && selectedCheckboxes.includes(checkboxName)}
            onChange={() => handleCheckboxChange(checkboxName)}
          />
          <label className="inline-block pl-[0.3rem] hover:cursor-pointer" htmlFor={`inlineCheckbox${index}`}>
            {checkboxName}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Checkbox;