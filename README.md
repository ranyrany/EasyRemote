# 원격지원 안내 홈페이지

Windows와 Mac 고객이 RustDesk로 원격지원을 받는 방법을 안내하는 한국어 정적 홈페이지입니다. 업체 이름·로고 없이 만들었으며 HTML, CSS, JavaScript만 사용합니다. 서버 프로그램, 데이터베이스, 회원가입, 외부 글꼴 및 분석 도구가 없습니다.

## 내 컴퓨터에서 확인하기 (가장 쉬운 방법)

1. Windows에서 **파일 탐색기**를 엽니다. 단축키는 **Windows 키 + E**입니다.
2. `C:\Users\user\Documents\EasyRemote` 폴더로 이동합니다.
3. **index.html**을 더블클릭합니다. Edge 또는 Chrome에서 홈페이지가 열립니다.
4. 코드처럼 보이면 파일을 마우스 오른쪽 버튼으로 클릭 → **연결 프로그램 → Microsoft Edge 또는 Google Chrome**을 선택합니다.
5. 내용을 수정한 뒤에는 파일을 저장하고 브라우저에서 **Ctrl + 새로고침**을 눌러 다시 확인하세요.

별도 설치나 명령어 입력 없이 열립니다. 다운로드 및 외부 안내 링크를 이용할 때는 인터넷이 필요합니다. 브라우저 창의 가로 폭을 줄이면 모바일 화면 구성을 확인할 수 있습니다. 실제 휴대폰에서 보려면 나중에 배포된 주소를 열면 됩니다.

## 파일 역할

| 파일 | 역할 |
| --- | --- |
| index.html | 제목, 다운로드 링크, 실행·연결·종료 안내 |
| style.css | 색상, 여백, PC·모바일 화면 디자인 |
| script.js | Windows / Mac 실행 안내 전환 |
| README.md | 확인 및 배포 방법 |

## 다운로드 링크 및 안내 기준

- RustDesk 공식 GitHub: https://github.com/rustdesk/rustdesk/releases/tag/1.5.1
- Windows / Apple Silicon / Intel Mac 다운로드 버튼은 모두 **공식 1.5.1 릴리스 페이지**를 새 탭으로 엽니다. 안내 버전은 1.5.1로 고정했으며, 파일이 바로 다운로드되지는 않습니다. 열린 페이지의 표에서 알맞은 파일을 직접 선택하세요.
- RustDesk 1.5.1은 Windows 원격지원 핵심 기능을 테스트한 버전이며, macOS는 아직 테스트 전입니다.
- 일반 Windows Intel / AMD 64비트 PC: **x86-64 행 → Windows 열 → EXE**. Windows ARM PC: **AArch64 (ARM64) 행 → Windows 열 → EXE**.
- Mac 칩 확인: **Apple 메뉴 → 이 Mac에 관하여**에서 ‘칩’이 Apple M 시리즈이면 Apple Silicon, ‘프로세서’가 Intel이면 Intel Mac입니다.
- Apple Silicon Mac: **AArch64 (ARM64) 행 → Mac 열 → Download**. Assets 목록에서는 **aarch64.dmg**로 끝나는 파일을 선택하세요.
- Intel Mac: **x86-64 행 → Mac 열 → Download**. Assets 목록에서는 **x86_64.dmg**로 끝나는 파일을 선택하세요.
- Mac 공식 설치·권한 안내: https://rustdesk.com/docs/en/client/mac/
- 앱 버전과 언어, 운영체제에 따라 메뉴 이름과 화면 구성이 달라질 수 있습니다. 일회용 비밀번호는 앱 설정에 따라 갱신 방식이 다르므로 지원 종료 후 직접 재생성하도록 안내했습니다.
- 공식 릴리스의 링크 목적지를 확인했습니다. 설치 파일 자체를 다운로드하거나 실행하지는 않았습니다.

## 개인정보 및 원격 연결

일반 원격지원은 일회용 비밀번호를 사용합니다. 장시간 원격수리는 고객 동의하에 무인 접속을 설정하고, 작업 종료 시 해제합니다.

이 홈페이지는 원격지원 ID와 비밀번호를 입력받거나 저장·전송하지 않습니다. 다운로드와 원격 연결은 RustDesk 외부 서비스를 이용합니다. 홈페이지를 여는 것만으로 원격 연결되지는 않습니다. 자체 원격 중계 서버를 구축하지 않으며, RustDesk 클라이언트의 네트워크 연결이 필요합니다. 담당자 연락처는 지정되지 않아 가상 연락처나 작동하지 않는 상담 버튼을 넣지 않았습니다.

## 나중에 GitHub Pages로 무료 배포하기

**현재 GitHub 업로드나 배포는 하지 않았습니다.** 아래는 직접 배포하고 싶을 때의 안내입니다.

1. GitHub에 로그인하고 새 **공개(Public) 저장소**를 만듭니다. 예: `easyremote`.
2. 저장소에서 **Add file → Upload files**를 누릅니다.
3. 이 폴더의 `index.html`, `style.css`, `script.js`, `README.md`를 올립니다. 네 파일은 별도 폴더 안이 아닌 저장소 최상위에 놓습니다.
4. **Commit changes**로 저장합니다.
5. 저장소 **Settings → Pages**에서 **Deploy from a branch**를 선택하고, **main / (root)**를 지정한 뒤 저장합니다.
6. 배포가 완료되면 Pages에 표시되는 주소를 엽니다. 보통 `https://계정이름.github.io/easyremote/` 형태입니다. 메뉴나 표시 문구는 GitHub 업데이트에 따라 달라질 수 있습니다.

## 확인할 항목

- Windows / Apple Silicon / Intel Mac 다운로드 버튼의 목적지가 공식 GitHub인지 확인합니다.
- Windows 안내와 Mac 안내 버튼을 눌러 해당 설명이 표시되는지 확인합니다.
- 자주 묻는 질문 제목을 눌러 답변이 펼쳐지는지 확인합니다.
- 브라우저 폭을 줄여 글자와 버튼이 화면 밖으로 나가지 않는지 확인합니다.
- 실제 원격지원 연결은 Windows와 Mac에서 담당자와 별도로 확인해야 합니다.
