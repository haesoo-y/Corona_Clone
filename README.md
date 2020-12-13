# Exchange Student in Japan

### 미리보기
- Desktop size

![web](https://user-images.githubusercontent.com/71266602/102006763-f289ae80-3d66-11eb-8a98-4917885ebe5c.gif)


- Mobile size

![mobile](https://user-images.githubusercontent.com/71266602/102006756-e7cf1980-3d66-11eb-9b54-1c3f093a2384.gif)


### 상세내용
1. BBC 비주얼 저널리즘의 코로나 기사 페이지를 보고 비숫하게 구현함.


2. 웹디자인을 기본으로 모바일 버전의 디자인도 별도로 반응형 제작.
 - 768px 이하에서 폰트 사이즈 변경
 - 768px 이하에서 여백 길이 변경
 - flex의 사용 및 max-width등을 이용하여 이미지도 반응형으로 설정


3. 고화질이미지로 인한 로딩지연으로 각 사이즈별 이미지 삽입
 - width를 1440px, 1024px, 764px, 576px 로 하는 각각의 이미지 별도 제작 
 - 화면 사이즈에 따라 알맞은 사이즈의 이미지가 로딩되도록 html에서 srcset사용


4. 스크롤이 일어나도 이미지는 고정되도록 설정
 - CSS의 sticky를 사용
 - 크롬 또는 모바일에서 정상작동함.
 - IE에서는 작동하지 않음.


5. JS를 이용하여 스크롤 이벤트 구현
 - 텍스트가 일정 범위에 들어오면 새 이미지가 나타나도록 함
 - 텍스트가 일정 범위에 들어오면 기존 이미지가 사라지게 함
 - Observer를 사용하여 이전, 기존, 새 텍스트만을 비교하여 for구문의 효율성을 높임


6. 함수의 매개변수를 이용하여 애니메이션 구현
 - 불꽃놀이 텍스트가 범위에 들어오면 각각의 불꽃놀이 이미지를 보이도록함.
 - for문을 통해 각각 시간차이를 두어 좀 더 실감나게 함
 - 이미지가 사라질 때 불꽃놀이 이미지도 원래대로 돌아가도록 하여 다시금 보일 수 있게함.


7. Netlify에 깃허브와 연동시켜 디플로이 하였음.
 - [이동하기](https://harryproject02.netlify.app/)


### 참고
 - 사이트 주소 : https://harryproject02.netlify.app/

 - 참고 사이트 ['재택근무의 일상화'...코로나19가 바꿀 사무실의 미래](https://www.bbc.com/korean/resources/idt-48d3c9a7-4063-4289-9726-611b5ea9d7b5)
