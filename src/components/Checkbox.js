//다량의 체크박스 만듬

import React, { useState } from 'react';

function Checkbox({ checkboxNames }) {
  // 체크박스 이름 배열을 받아서 초기 상태를 설정합니다.
  const initialCheckboxes = checkboxNames.map(name => ({ name, checked: false }));
  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = checkboxes.map((checkbox, idx) => ({
      ...checkbox,
      checked: idx === index ? !checkbox.checked : false
    }));
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <div className="flex flex-wrap">
      {checkboxes.map((checkbox, index) => (
        <div key={index} className="mb-[0.25rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
          <input
            className="... (테일윈드 CSS 클래스 삽입)"
            type="checkbox"
            id={`inlineCheckbox${index}`}
            checked={checkbox.checked}
            onChange={() => handleCheckboxChange(index)}
          />
          <label className="inline-block pl-[0.3rem] hover:cursor-pointer" htmlFor={`inlineCheckbox${index}`}>
            {checkbox.name}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Checkbox;