import React, { useState } from 'react';

const Board = () => {
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[960px]">
                <div className="mb-5">
                    <label htmlFor="message" className="mb-3 block text-base font-medium text-[#07074D]">
                        제목
                    </label>
                    <textarea
                        rows="1"
                        name="message"
                        id="message"
                        placeholder="제목을 입력해주세요"
                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-500 focus:shadow-md"
                    ></textarea>
                </div>
                <div className="mb-5">
                    <label htmlFor="message" className="mb-3 block text-base font-medium text-[#07074D]">
                        자기소개서 작성
                    </label>
                    <textarea
                        rows="20"
                        name="message"
                        id="message"
                        placeholder="해당 내용을 입력해주세요"
                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-500 focus:shadow-md"
                        value={text}
                        onChange={handleTextChange}
                    ></textarea>
                    <div className="text-right mt-2">
                        공백 포함 <span className="text-purple-600">{text.length}</span> 자
                    </div>
                </div>
                <div>
                    <button className="hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none">
                        저장
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Board;