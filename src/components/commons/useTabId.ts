import { useMemo } from 'react';
import uuid from '../../helpers/uuid';

/**
 * 生成标签id
 */
function useTabId() {
  const tabId = useMemo(uuid, []);

  return tabId;
}

export default useTabId;
