import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Checkbox from '../components/Checkbox';

function Coverletterlist() {
    return (
        <div>
            <Nav />
            <div className="mr-24 ml-24 mb-4">
                <div className="mb-2 pl-4">* 최종학력</div>
                <Checkbox checkboxNames={['고등학교 졸업', '전문학사(2년제 전문대학)', '학사(4년제 졸업)', '석사', '박사']} />
            </div>
            <div className="mb-5 ml-4">
                    <label htmlFor="message" className="mb-3 block text-base font-medium text-[#07074D] mr-24 ml-24">
                        * 자격증
                    </label>
                    <textarea
                        rows="1"
                        name="message"
                        id="message"
                        placeholder="ex)한국사 1급, 컴활 2급, 정보처리기사 이런식으로 입력해주세요"
                        className="w-1/3 ml-24 resize-none rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-purple-500 focus:shadow-md"
                    ></textarea>
                </div>
            <div className="mr-24 ml-24 mb-4">
                <div className="pl-4 pb-2">* 경력</div>
                <Checkbox checkboxNames={['1년미만', '1~3년', '3~5년', '5년이상']} />
            </div>
            <Footer />
        </div>
    );
}

export default Coverletterlist;

