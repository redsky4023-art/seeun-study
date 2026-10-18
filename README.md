# 세은이 공부방

- `index.html` — EBS 중학 강의를 단원별로 바로 찾는 공부 도우미 페이지
- `review.html` — 복습방: 「오늘 공부」(가장 최근 단원 페이지를 그대로 펼쳐 보여 줌) · 오답노트(사진) · 기록(달력·지난 공부·시험 D-day·백업)
- `lessons/` — 단원 공부 페이지. 새 단원은 `lessons/<과목>-<번호>-<이름>.html` 로 만들고 `lessons/lessons.js` 맨 위에 한 줄 추가
  - 단원 페이지는 `<html data-lesson="id">` + `<script src="track.js">` 로 할 일 체크·퀴즈 점수를 `seeun.study.v1` 에 남긴다 (복습방 기록 탭이 읽음)
  - 복습방은 `?embed=1` 로 불러 머리 링크를 숨긴다
- 기록: 오답·시험은 localStorage `seeun.rv.v1`, 오답 사진은 IndexedDB `seeun-rv`, 공부 기록은 `seeun.study.v1` (기기별 · 백업 파일에 모두 포함)
- `manifest.json`, `icon-*.png` — 홈 화면에 추가할 때 쓰는 앱 아이콘
