# 어린이책방
미니프로젝트로 제작한 multipage application입니다.

## 사용 언어
- Javascript(ECMAScript 6)
- HTML
- SCSS

## 기술 스택
- 프론트엔드 프레임워크 Bootstrap
- 모듈 번들링 Webpack
- 트랜스파일러 Bable
- 의존성 관리 npm

## 폴더구조
```
|   .eslintrc.js
|   .eslintrc.json
|   .gitignore
|   .prettierrc.json
|   package.json          - npm 설정
|   prettierrc.json       - prettier 설정
|   README.md             - readme 파일
|   webpack.config.js     - webpack 설정
|
+---dist
|       index.js          - webpack 빌드 결과물
|       info.js           - webpack 빌드 결과물
|
+---img                   - 이미지 파일 모음
|
+---public
|       index.html        - 메인 페이지
|       info.html         - 상세 페이지
|       search.html       - 검색 페이지
|
\---src                   
    |   constant.js       - api key 및 상수 변수 정의
    |   index.js          - 메인 페이지 자바스크립트
    |   info.js           - 상세 페이지 자바스크립트
    |   info.scss         - 상세 페이지 스타일시트
    |   search.js         - 검색 페이지 자바스크립트
    |   search.scss       - 검색 페이지 스타일시트
    |   style.scss        - 메인 페이지 자바스크립트
    |
    \---api
            index.js      - api에 request하는 axios 함수 정의
```

## 실행 화면
![어린이책방index2](https://user-images.githubusercontent.com/46421950/120105482-19606380-c194-11eb-8ac7-edef4c2029fb.png)
![image](https://user-images.githubusercontent.com/46421950/120105504-267d5280-c194-11eb-974e-ca63f8ec32c6.png)
