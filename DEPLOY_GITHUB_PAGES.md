# 니혼고 한입 v2.8 — GitHub Pages 무료 배포 (2026-10 기준)

## 한 번만 하면 되는 배포
1. https://github.com 에서 무료 계정을 만들고 로그인합니다.
2. 우측 상단 **+** → **New repository** → 이름 예: `nihongo-hanip` → **Public** → **Create repository**.
3. 저장소의 **Add file → Upload files**에서 이 ZIP을 **압축 해제한 뒤 내부 파일을 전부** 업로드합니다. `index.html`이 저장소 최상위에 있어야 합니다. (`.nojekyll`은 숨김 파일입니다. 업로드하지 않아도 이 앱은 별도 빌드가 없어 동작하지만 포함하면 좋습니다.)
4. **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main, / (root) → Save**.
5. Pages 화면에 게시 주소가 표시되면 접속합니다. 일반적으로 `https://사용자명.github.io/nihongo-hanip/` 형태지만 주소를 추측하지 말고 Pages에서 실제 주소를 확인하세요.
6. Android: Chrome 메뉴 → **앱 설치 / 홈 화면에 추가**. iPhone: Safari 공유 → **홈 화면에 추가**.

## 필수 주의
- GitHub Free의 Pages는 **공개 저장소**에 게시됩니다. 백업 JSON이나 개인 장면 파일을 저장소에 올리지 마세요. 앱 코드와 학습 콘텐츠만 업로드하세요.
- 앱 데이터와 개인 이미지 등록은 기기별로 저장됩니다. 기기 간 자동 동기화는 없고 **설정 → 기록·이미지 함께 백업/복원**을 이용합니다.
- HTTPS 배포 전 로컬 HTML에서는 설치/오프라인 기능의 일부가 작동하지 않습니다.
- 공식 원본 애니 장면은 자동 탑재되지 않았습니다. 정확한 장면 및 이용 조건 확인 시 장면 목록에 추가할 수 있습니다.
- 개인 학습용으로 사용하고 백업 파일은 공개하지 마세요.

### 업데이트 방법
저장소에서 변경된 파일을 다시 올리고 변경을 커밋한 뒤, 앱의 **설정 → 새 버전 확인**을 누르세요. 이전 주소와 동일하면 브라우저 저장된 학습 진도는 보통 유지되지만, 먼저 백업하는 것이 안전합니다.

공식 문서: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
