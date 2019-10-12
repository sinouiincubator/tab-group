import { useContext, useEffect } from 'react';
import useRefValue from '../../helpers/useRefValue';
import TabListContext from '../TabListContext';
import useTabId from './useTabId';

/**
 * 注册标签页
 */
function useTabRegister() {
  const context = useContext(TabListContext);
  const tabId = useTabId();
  const index = context ? context.register(tabId) : -1;
  const unregisterRef = useRefValue(context ? context.unregister : undefined);

  useEffect(() => {
    const unregister = unregisterRef.current;

    if (unregister) {
      return () => unregister(tabId);
    }
    return undefined;
  }, [tabId, unregisterRef]);

  return index;
}

export default useTabRegister;
