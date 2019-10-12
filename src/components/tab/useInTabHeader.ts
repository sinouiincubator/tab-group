import { useContext } from 'react';
import TabHeaderContext from '../TabHeaderContext';

function useInTabHeader() {
  const context = useContext(TabHeaderContext);

  return !!context;
}

export default useInTabHeader;
