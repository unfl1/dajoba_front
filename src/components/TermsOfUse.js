import React from 'react';

function TermsOfUse() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">이용약관</h1>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">제1조 (목적)</h2>
        <p className="mb-4">
          본 약관은 이용자가 웹사이트 및 앱 (이하 "서비스"라 함)를 이용함에 있어 서비스의 제공과 관련하여
          규정함을 목적으로 합니다.
        </p>

        <h2 className="text-xl font-semibold mb-2">제2조 (약관의 효력 및 변경)</h2>
        <p className="mb-4">
          본 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력이 발생합니다. 본 약관의 내용은
          사전 고지 없이 변경될 수 있으며, 변경된 약관은 게시 즉시 효력을 발생합니다.
        </p>

        <h2 className="text-xl font-semibold mb-2">제3조 (서비스 이용계약의 체결)</h2>
        <p className="mb-4">
          서비스 이용계약은 이용자가 본 약관에 동의하고, 서비스 제공자의 승낙으로 체결됩니다.
        </p>

        <h2 className="text-xl font-semibold mb-2">제4조 (서비스의 제공 및 변경)</h2>
        <p className="mb-4">
          1. 서비스 제공자는 이용자에게 아래와 같은 서비스를 제공합니다:
          <ul className="list-disc pl-6">
            <li>회원 가입 및 로그인 기능</li>
            <li>컨텐츠 업로드 및 공유 기능</li>
            <li>이용자 간 메시지 전송 기능</li>
            {/* 기타 서비스 내용 추가 */}
          </ul>
          2. 서비스 제공자는 서비스의 내용을 변경할 수 있으며, 변경 시에는 이용자에게 사전 고지합니다.
        </p>

        <h2 className="text-xl font-semibold mb-2">제5조 (이용자의 의무)</h2>
        <p className="mb-4">
          1. 이용자는 서비스 이용 시 다음 사항을 준수해야 합니다:
          <ul className="list-disc pl-6">
            <li>타인의 개인정보 보호</li>
            <li>불법 콘텐츠의 업로드 및 공유 금지</li>
            <li>정보의 정확성 유지</li>
            {/* 기타 이용자 의무 사항 추가 */}
          </ul>
          2. 이용자는 서비스 이용 시 서비스 제공자의 정책과 규정을 준수해야 합니다.
        </p>

        <h2 className="text-xl font-semibold mb-2">제6조 (서비스 이용 제한)</h2>
        <p className="mb-4">
          1. 서비스 제공자는 다음과 같은 경우에 이용자의 서비스 이용을 일시적으로 또는 영구적으로 제한할 수 있습니다:
          <ul className="list-disc pl-6">
            <li>불법 활동 또는 부적절한 행동으로 인한 서비스 악용</li>
            <li>기타 서비스의 원활한 운영에 지장을 주는 행위</li>
            <li>서비스 이용 계약 위반</li>
          </ul>
          2. 이용자는 서비스 이용 제한에 대해 이의를 제기할 수 있으며, 제한 사유가 해소되면 서비스 이용이 재개됩니다.
        </p>

        <h2 className="text-xl font-semibold mb-2">제7조 (계정 및 개인정보 관리)</h2>
        <p className="mb-4">
          1. 이용자는 자신의 계정 정보를 안전하게 관리해야 합니다. 계정 정보의 유출 또는 부정 사용으로 인한 손실에 대해 서비스 제공자는 책임을 지지 않습니다.
          2. 개인정보 수집 및 이용에 대한 자세한 내용은 개인정보 보호 정책을 참고하십시오.
        </p>

        <h2 className="text-xl font-semibold mb-2">제8조 (서비스의 중단)</h2>
        <p className="mb-4">
          서비스 제공자는 서비스의 제공을 중단할 수 있으며, 이 경우 이용자에게 사전 고지하고 관련 조치를 취할 것입니다. 서비스 제공 중단으로 인해 발생하는 불편이나 손실에 대한 책임은 서비스 제공자에게 있지 않습니다.
        </p>

        <h2 className="text-xl font-semibold mb-2">제9조 (지적재산권)</h2>
        <p className="mb-4">
          1. 서비스 내에서 제공되는 콘텐츠에 대한 지적재산권은 서비스 제공자 또는 해당 콘텐츠 제공자에게 속합니다.
          2. 이용자는 서비스를 통해 얻은 정보 및 콘텐츠를 상업적으로 이용, 복제, 배포, 수정하거나 제3자에게 제공해서는 안 됩니다.
        </p>

        <h2 className="text-xl font-semibold mb-2">제10조 (분쟁 해결)</h2>
        <p className="mb-4">
          서비스 이용과 관련된 분쟁은 서비스 제공자와 이용자간의 합의에 따라 해결됩니다. 합의에 도달하지 못한 경우, 관할 법원에 소를 제기할 수 있습니다.
        </p>

        <h2 className="text-xl font-semibold mb-2">제11조 (약관의 효력)</h2>
        <p className="mb-4">
          본 약관은 서비스 제공자와 이용자간의 합의에 따라 체결되며, 이용자가 약관을 위반하는 경우 서비스 제공자는 이용자의 서비스 이용을 제한할 권리를 가집니다.
        </p>

        <h2 className="text-xl font-semibold mb-2">제12조 (기타)</h2>
        <p className="mb-4">
          본 약관에 명시되지 않은 사항은 관련 법령 및 서비스 제공자의 정책에 따릅니다.
        </p>
      </div>
    </div>
  );
}

export default TermsOfUse;