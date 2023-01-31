# [프론트엔드 학습 내용 보여주는 서비스](https://github.com/advanced-webapps-class/classroom/blob/gh-pages/2022/test2)
start-fe-2022는 고급웹개발론에서 학습한 결과물들을 모아 하나의 페이지로 구성한 웹페이지입니다. 

## 실행방법
```
$ git clone https://github.com/dhflxhdxhd/start-fe-2022
$ cd webpack-env
$ npm installs
$ npm run build
$ npm start
```

## 데이터 API

#### [class.json](src/class.json): 학습내용 데이터

- title: 수업내용
- docUrl: 수업내용 문서 url
- links: 수업시간에 진행한 도움링크들
- gitUrl: 수업실습 git 디렉토리 url
- date: 수업날짜

```json
  {
    "title": "수업소개",
    "docUrl": "https://start-fe.surge.sh",
    "links": [],
    "gitUrl": "https://github.com/advanced-webapps-class/classroom/tree/gh-pages/2022/01",
    "date": "2022-03-04"
  },
```

#### [quiz.json](src/quiz.json): 퀴즈내용 데이터(중간고사,기말고사 포함)

- title: 퀴즈 제목
- docUrl: 퀴즈 내용 문서 url
- previewUrl: 퀴즈의 이미보기 url (html)
- gitUrl: 퀴즈 실습 코드 url

```json
  {
    "title": "이미지 슬라이드",
    "docUrl": "https://gist.github.com/niceaji/640626074018a93ab4bced4dd9bdcf95",
    "previewUrl": "",
    "gitUrl": ""
  },
```

## 서비스 화면
![화면1](./start-fe-2022(1).png)
![화면2](./start-fe-2022(2).png)

