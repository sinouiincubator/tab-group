import { useContext, useEffect } from 'react';
import useRefValue from '../../helpers/useRefValue';
import TabListContext, { TabProps } from '../TabListContext';
import useTabId from './useTabId';

/**
 * 注册标签页
 */

function useTabRegister(props?: TabProps): [string, number] {
  const context = useContext(TabListContext);
  const tabId = useTabId();
  const index = context ? context.register(tabId, props || {}) : -1;
  const unregisterRef = useRefValue(context ? context.unregister : undefined);

  useEffect(() => {
    const unregister = unregisterRef.current;

    if (unregister) {
      return () => unregister(tabId);
    }
    return undefined;
  }, [tabId, unregisterRef]);

  return [tabId, index];
}

export default useTabRegister;
