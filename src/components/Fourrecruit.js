import work1 from '../assets/work1.jpg';
import work2 from '../assets/work2.jpg';
import work3 from '../assets/work3.jpg';
import work4 from '../assets/work4.jpg';

function Fourrecruit() {
    return (
        <div className="ml-24 mb-20 mr-24 mt-16">
            <div className="pl-4 "># 최신 채용</div>
            <div className="grid grid-cols-4 mt-5 gap-5 ">
                <div>
                    <img src={work1} alt="" ></img>
                    <p>기업 1</p>
                </div>
                <div>
                    <img src={work2} alt="" ></img>
                    <p>기업 2</p>
                </div>
                <div>
                    <img src={work3} alt="" ></img>
                    <p>기업 3</p>
                </div>
                <div>
                    <img src={work4} alt="" ></img>
                    <p>기업 4</p>
                </div>
            </div>
        </div>
    )
}

export default Fourrecruit;
