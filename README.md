React와 History API를 사용하여 SPA Router기능 구현하기

**1) 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.**
- `/` → `root` 페이지
- `/about` → `about` 페이지

**2) 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.**

- 힌트) `window.onpopstate`, `window.location.pathname` History API(`pushState`)

**3) Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.**

```jsx
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```

**4) 최소한의 push 기능을 가진 useRouter Hook을 작성한다.**

```jsx
const { push } = useRouter();
```

**5) 아래 스크린샷을 참고하여 앱을 작성한다.**

<img width="660" alt="스크린샷 2022-10-07 오후 5 16 12" src="https://user-images.githubusercontent.com/22545843/194748977-ea7d7a3a-8cf3-4c80-b61d-b7987408a102.png">
<img width="658" alt="스크린샷 2022-10-07 오후 5 16 22" src="https://user-images.githubusercontent.com/22545843/194748973-28c4d730-6ce5-4fbc-a2f4-fc033ca6c357.png">

기록
https://www.wooslog.com/blog/react-router
