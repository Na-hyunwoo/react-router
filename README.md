#React와 History API를 사용하여 SPA Router 기능 구현하기

React와 History API를 사용하여 SPA Router기능 구현하기
1) 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다. 
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

![스크린샷 2022-10-07 오후 5.16.12.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/228f60fa-0d2a-42d6-9c2b-d3f3ec766103/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-10-07_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.16.12.png)

![스크린샷 2022-10-07 오후 5.16.22.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0f92ea89-cdaa-4512-9f66-476a3660a035/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-10-07_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.16.22.png)
