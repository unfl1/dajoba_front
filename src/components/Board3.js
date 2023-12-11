import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../Config';
import { useNavigate, useParams } from 'react-router-dom';
import Checkbox from '../components/Checkbox';
import { useSelector } from 'react-redux';



const Board3 = () => {
    const user = useSelector(state => state.user.user);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]); // 선택된 체크박스를 관리합니다.
    const navigate = useNavigate();
    const { userid, introid } = useParams();

    useEffect(() => {
        // userid와 introid를 사용하여 데이터를 가져오는 GET 요청을 보냅니다.
        axios.get(`${API_BASE_URL}users/${user.userid}/self-intro/${introid}`)
            .then((response) => {
                const data = response.data;
                setTitle(data.intro_name); // 기존 제목 설정
                setText(data.intro_content); // 기존 내용 설정
                setSelectedCheckboxes(data.desire_content); // 선택된 체크박스 설정
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [userid, introid]);

    const handleCheckboxChange = (checkboxName) => {
        // 선택된 체크박스 정보를 업데이트합니다.
        const updatedCheckboxes = selectedCheckboxes.includes(checkboxName)
            ? selectedCheckboxes.filter(name => name !== checkboxName)
            : [...selectedCheckboxes, checkboxName];
        setSelectedCheckboxes(updatedCheckboxes);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSave = () => {
        // 수정된 데이터와 선택된 체크박스 정보를 서버에 PUT 요청으로 보냅니다.
        axios.put(`${API_BASE_URL}/users/${user.userid}/self-intro/${introid}`, {
            intro_name: title, // 수정된 제목
            intro_content: text, // 수정된 내용
            desire_content: selectedCheckboxes // 수정된 체크박스 정보
        })
        .then((response) => {
            navigate('/Coverletterlist');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[960px]">
                <div className="mb-6">직군(희망분야)</div>
                <Checkbox
                    checkboxNames={['개발', '경영·비즈니스', '마케팅·광고', '디자인', '영업', '고객서비스·리테일', '미디어', '엔지니어링·설계', 'HR', '게임 제작', '금융', '제조·생산', '의료·제약·바이오', '교육', '물류·무역', '식·음료', '법률·법집행기관', '건설·시설', '공공·복지']}
                    selectedCheckboxes={selectedCheckboxes}
                    onCheckboxChange={handleCheckboxChange}
                />
                <div className="mb-5">
                    <label htmlFor="title" className="mb-3 block text-base font-medium text-[#07074D]">
                        제목
                    </label>
                    <textarea
                        rows="1"
                        name="title"
                        id="title"
                        placeholder="제목을 입력해주세요"
                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-500 focus:shadow-md"
                        value={title}
                        onChange={handleTitleChange}
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
                    <button className="hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none" onClick={handleSave}>
                        수정
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Board3;