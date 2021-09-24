import s from './Container.module.css';
//рендерит детей
function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

export default Container;
