import { MagnifyingGlass } from 'react-loader-spinner';

import s from './Loader.module.css';
const Loader = () => {
  return (
    <div className={s.loader}>
      <MagnifyingGlass
        visible={true}
        height="280"
        width="280"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};
export default Loader;
