import { NavigationDots, SocialMedia } from "../components";

function AppWrap({ children, idName, classNames }) {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">{children}</div>
      <NavigationDots active={idName} />
    </div>
  );
}

export default AppWrap;
