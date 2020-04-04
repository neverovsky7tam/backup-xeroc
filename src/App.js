import React, { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Main/Home';
import SignUp from './components/Main/LogIn/SignIn';
import LogIn from './components/Main/LogIn/LogIn';
import Footer from './components/Footer/Footer';

function App() {
  const [mainContent, setMainContent] = useState(Home);
  const [isLogin, setLogin] = useState(false);

  let content = mainContent;
  if (mainContent === 'signin') content = <SignUp setLogin={setLogin} />;
  if (mainContent === 'login') content = <LogIn setLogin={setLogin} />;

  return (
    <>
      <Header setMainContent={setMainContent} isLogin={isLogin} />
      <main className="main">
        {content}
      </main>
      <Footer />
    </>
  );
}

export default App;
