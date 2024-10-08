import { Helmet } from 'react-helmet-async';

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>홈페이지 | 내 웹사이트</title>
        <meta name='description' content='이것은 내 웹사이트의 홈페이지입니다.' />
        <link rel='canonical' href='https://mywebsite.com' />
        <meta property='og:title' content='홈페이지 | 내 웹사이트' />
        <meta property='og:description' content='이것은 내 웹사이트의 홈페이지입니다.' />
        <meta property='og:image' content='https://mywebsite.com/og-image.jpg' />
      </Helmet>
      <h1>홈페이지에 오신 것을 환영합니다!</h1>
    </div>
  );
}

export default HomePage;
