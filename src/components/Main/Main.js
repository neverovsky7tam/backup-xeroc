import React from 'react';
import { useSelector } from 'react-redux';
import GeneralBlock from './GeneralBlock/GeneralBlock';
import SignUp from './Auth/SignIn';
import LogIn from './Auth/LogIn';
import Terms from './Terms/Terms';

const Main = () => {
  const contentVar = useSelector((state) => state.mainContent);

  let content = null;

  if (contentVar === 'general') content = <GeneralBlock />
  if (contentVar === 'sign-up') content = <SignUp />;
  if (contentVar === 'log-in') content = <LogIn />;
  if (contentVar === 'terms') content = <Terms />;

  return (
    <main className="main">
      {content}
    </main>
  );
};

export default Main;