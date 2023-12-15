//global footer
import { Link } from 'react-router-dom';

function Footer() {
  return(
    <div className=" pt-4 pb-4 pl-24 text-sm bg-gray-100">
      <ul className="container flex gap-10">
        <li>DAJOBA Inc</li>
        <Link to ="PrivacyPolicyPage"><li>개인정보</li></Link>
        <Link to ="TermsOfUsePage"><li>이용약관</li></Link>
      </ul>
      <div>
        <div>웹사이트 제공자: TABA07 Korea, private unlimited company | 연락처: 010-1234-5678</div>
        <div>사업자 등록 번호: 123-456-78910 | DAJOBA는 통신판매 중개자로 DAJOBA 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다.</div>
      </div>
    </div>
  )
}

export default Footer;