//자소서 목록들 페이지
import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Checkbox from '../components/Checkbox';
import Boardlist from '../components/Boardlist';

function Coverletterlist() {
    return (
        <div>
            <Nav />
            <div className="mr-24 ml-24 mt-10 mb-4">
                <div className="mb-2 pl-4">* 최종학력</div>
                <Checkbox checkboxNames={['고등학교 졸업', '전문학사(2년제 전문대학)', '학사(4년제 졸업)', '석사', '박사']} />
            </div>
            <div className="mr-28 ml-28 pb-4">
                <label className="text-gray-800 block my-3 text-md" for="certificate">* 자격증</label>
                <input className="w-1/2 bg-gray-100 px-2 py-1 rounded-lg focus:outline-none" type="text" name="certificate" id="certificate" placeholder="ex)한국사 1급, 컴퓨터활용능력 2급, SQLD, ..." />
            </div>
            <div className="mr-24 ml-24 mb-4">
                <div className="pl-4 pb-2">* 경력</div>
                <Checkbox checkboxNames={['1년미만', '1~3년', '3~5년', '5년이상']} />
            </div>
            <div className="text-center pt-6">
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded ">
                    저장
                </button>
            </div>
            <div className="mt-24">
                <Boardlist />
            </div>
            <Footer />
        </div>
    );
}

export default Coverletterlist;

