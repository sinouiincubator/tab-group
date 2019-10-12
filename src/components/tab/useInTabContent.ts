import { useContext } from 'react';
import TabContentContext from '../TabContentContext';

function useInTabContent() {
  const context = useContext(TabContentContext);

  return !!context;
}

export default useInTabContent;
