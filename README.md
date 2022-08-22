# wanted-junyunseo

## Commit convention

| 종류     | 설명                                         |
| -------- | -------------------------------------------- |
| feat     | 파일, 폴더, 새로운 기능 추가                 |
| fix      | 버그 수정                                    |
| style    | 코드 스타일 변경 + UI 변경                   |
| docs     | 문서 생성, 추가, 수정 README.md              |
| chore    | 수정 (JSON 데이터 포맷 변경 / css 변경 등)   |
| conf     | .env, .gitignore 추가                        |
| refactor | 코드 리팩토링                                |
| rename   | 파일 혹은 폴더명 수정, 옮기는 작업만 한 경우 |
| remove   | 파일 삭제                                    |
| init     | 프로젝트 초기 설정                           |

# 실행 방법

1. 프로젝트 클론
```
git clone https://github.com/Avoler0/wanted-schedule-engall.git
```

2. 패키지 설치

```
npm install
```

3. json server 실행

```
npm run server
```

4. 개발 서버 실행

```
npm run dev
```

# 메인 페이지
![image](https://user-images.githubusercontent.com/91608021/183663072-b70c08b0-4086-4a73-8d38-3e336f6bbafb.png)

- [x] 일 별로 목록 추가
- [x] json-server에 저장한 데이터를 요일별로 출력

# 스케줄 추가 페이지
![image](https://user-images.githubusercontent.com/91608021/183818704-5ea701e0-a76a-4beb-ad90-b70239eb970e.png)
- [x] hours minutes , AM PM , 요일을 지정하여 Save 버튼 클릭 시 json-server로 데이터를 보냄
- [x] json-server로 보낸 데이터는 date 객체가 아닌 string 객체입니다
```
    {
      "week": "2022-08-22~2022-08-28",
      "startTime": "2022-08-27T14:00:00.000Z",
      "endTime": "2022-08-27T14:40:00.000Z",
      "day": "Saturday",
      "id": 1
    },
```
- [x] 아무 입력 없을 시 00 시 00분 , 월요일으로 저장합니다.
- [x] AM PM 단위로 나누어 시간을 전달 할 때 PM일 시 12시간을 추가하여 2시로 작성하였을 경우 17시 , 17시로 작성하면 동일하게 저장합니다.
