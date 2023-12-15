import React from 'react';

function PrivacyPolicy() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6">개인정보 취급방침</h1>
            <div className="bg-white shadow-md rounded p-6">
                <h2 className="font-semibold text-lg mb-3">1. 개인정보의 처리 목적</h2>
                <p className="mb-4">
                    다잡아는 다음의 목적을 위해 개인정보를 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며, 이용 목적이 변경될 시에는 사전 동의를 구할 예정입니다.
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>회원 가입의사 확인, 회원자격 유지·관리, 서비스 제공 및 개인 맞춤 서비스 제공 등</li>
                </ul>

                <h2 className="font-semibold text-lg mb-3">2. 개인정보의 처리 및 보유 기간</h2>
                <p className="mb-4">
                    ① 다잡아는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다.
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>계정 데이터(이메일, 아이디 등): 회원 탈퇴 시까지</li>
                    <li>결제 기록: 5년</li>
                    {/* 추가 항목 */}
                </ul>

                <h2 className="font-semibold text-lg mb-3">3. 개인정보의 제3자 제공에 관한 사항</h2>
                <p className="mb-4">
                    ① 다잡아는 원칙적으로 개인정보를 제3자에게 제공하지 않습니다. 다만, 이용자들의 동의를 받거나 법률의 특별한 규정 등에 의해 예외적으로 개인정보가 제공될 수 있습니다.
                </p>

                <h2 className="font-semibold text-lg mb-3">4. 개인정보처리의 위탁에 관한 사항</h2>
                <p className="mb-4">
                    ① 다잡아는 서비스 향상과 원활한 개인정보 처리를 위하여 개인정보 처리업무의 일부 또는 전부를 위탁할 수 있으며, 위탁계약 체결 시 개인정보 보호법 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등의 사항을 계약서 등 문서에 명시하고, 이를 안전하게 관리하고 있습니다.
                </p>

                <h2 className="font-semibold text-lg mb-3">5. 개인정보의 수집 방법</h2>
                <p className="mb-4">
                    다잡아는 다음과 같은 방법으로 개인정보를 수집합니다:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>회원 가입 시 입력한 정보</li>
                    <li>서비스 이용 과정에서 생성되거나 제공된 정보</li>
                    <li>고객 문의, 이벤트 응모, 설문조사 등을 통해 수집된 정보</li>
                    {/* 추가 수집 방법 */}
                </ul>

                <h2 className="font-semibold text-lg mb-3">6. 개인정보의 이용목적</h2>
                <p className="mb-4">
                    다잡아는 다음과 같은 목적으로 개인정보를 이용합니다:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>회원 가입 및 관리</li>
                    <li>서비스 제공 및 운영</li>
                    <li>고객 지원 및 문의 응대</li>
                    <li>서비스 개선 및 개인 맞춤 서비스 제공</li>
                    {/* 추가 이용목적 */}
                </ul>

                <h2 className="font-semibold text-lg mb-3">7. 개인정보의 보유 및 파기</h2>
                <p className="mb-4">
                    ① 다잡아는 개인정보의 처리목적이 달성된 후에는 원칙적으로 해당 정보를 지체 없이 파기합니다. 다만, 관련 법령에 따라 일정 기간 동안 보존하여야 하는 경우에는 그 기간 동안 보관합니다.
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>계정 데이터(이메일, 아이디 등): 회원 탈퇴 시까지</li>
                    <li>결제 기록: 5년</li>
                    {/* 추가 보유 및 파기 기간 */}
                </ul>

                <h2 className="font-semibold text-lg mb-3">8. 개인정보의 안전성 확보 조치</h2>
                <p className="mb-4">
                    다잡아는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>개인정보 암호화</li>
                    <li>접근 제어 및 권한 관리</li>
                    <li>보안 프로그램 설치 및 주기적인 점검</li>
                    {/* 추가 보안 조치 */}
                </ul>

                <h2 className="font-semibold text-lg mb-3">9. 이용자의 권리와 의무</h2>
                <p className="mb-4">
                    ① 이용자는 개인정보에 대한 열람, 정정, 삭제, 처리정지 등의 권리를 가지고 있으며, 이를 행사하기 위해 (회사명)에게 문의할 수 있습니다.
                </p>
                <p className="mb-4">
                    ② 이용자는 개인정보를 제공하는 경우, 제공한 정보의 정확성 및 최신성을 유지해야 하며, 제3자 정보를 도용하여 등록하는 행위를 금지합니다.
                </p>

                <h2 className="font-semibold text-lg mb-3">10. 개인정보 보호책임자</h2>
                <p className="mb-4">
                    다잡아는 개인정보 보호책임자를 지정하여 개인정보 관련 문의 및 민원 처리에 관한 업무를 수행하고 있습니다. 개인정보 보호책임자의 연락처는 다음과 같습니다:
                </p>
                <p className="mb-4">
                    - 이름: (이름)
                    - 이메일: (이메일 주소)
                    - 전화번호: (전화번호)
                </p>

                {/* 추가적인 섹션들 */}

            </div>
        </div>
    );
}

export default PrivacyPolicy;