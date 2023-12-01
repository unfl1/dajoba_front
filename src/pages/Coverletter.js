import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Checkbox from '../components/Checkbox';
import Board from '../components/Board';

function Coverletterlist() {
    return (
        <div>
            <Nav />
            <div className="items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[960px]">

                    <div className="pl-4 mb-2">직군(희망분야)</div>
                    <Checkbox checkboxNames={['개발', '경영·비즈니스', '마케팅·광고', '디자인', '영업', '고객서비스·리테일', '미디어', '엔지니어링·설계', 'HR', '게임 제작', '금융', '제조·생산', '의료·제약·바이오', '교육', '물류·무역', '식·음료', '법률·법집행기관', '건설·시설', '공공·복지']} />
                </div>
                <div>

                </div>
                <Board />
            </div>
            <Footer />
        </div>
    );
}

export default Coverletterlist;

