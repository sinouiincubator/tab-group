import TabHeader from './components/tab-header';
import TabHeaderItem from './components/tab-header-item';
import TabContent from './components/tab-content';
import TabPanel from './components/tab-panel';
import TabGroup from './components/TabGroup';
import Tab from './components/tab';
import { reset } from './helpers/uuid';
import useTabState from './components/commons/useTabState';

export {
  Tab,
  TabHeader,
  TabHeaderItem,
  TabContent,
  TabPanel,
  reset as resetIdCounter,
  useTabState,
};

export default TabGroup;
