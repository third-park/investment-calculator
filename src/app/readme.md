- ## FSD(Feature Sliced Degined) 아키텍쳐 방법론
각 도메인 단위로 구성요소들을 모아서 유지보수성과 확장성을 높이는 구조,
규모가 큰 소프트웨어에 적용할 수 있다.
*운영기간이 짧거나 작은 규모의 프로적트는 모놀리스 형식으로 충분함ㅇㅇ

- ### Layer
app
processes(deprecated)
pages
widgets
features
entities
shared
---
app은 전역 컴포넌트
pages는 router페이지(URL 단위)
widgets는 layouts(UI 묶음) - 생략가능
features는 사용자 인터렉션 & 비즈니스 로직단위
entities는 컴포넌트, 데이터 부분
shared는 재사용 할 수 있는 UI를 위치시킨다.
---

아래로갈수록 추상화단계는 높아짐
import는 위에서 아래 순으로 가져올 수 있고 역순은 안된다.

app과 shared layer를 제외하고 각각 slices계층과 segment계층을 가진다.
`Slices`는 기능/도메인 단위 묶음(user, post, comment)이고 `Segments`는 Slice 내부의 역할별 파일 분리폴더(ui,model,lib,api 등)이다.
Slices 내부에는 public api정의가 있어야함

일단 entities에서 대부분 로직 생성 후 계층분리 하자.
