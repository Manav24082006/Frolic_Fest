// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
  AccountBalanceSharpIcon,
  BusinessOutlinedIcon,
  EmojiEventsOutlinedIcon
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'item',
      url: '/sample-page',
      icon: icons.ChromeOutlined
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis/',
      icon: icons.QuestionOutlined,
      external: true,
      target: true
    },
    {
      id: 'Institutes',
      title: 'Institutes',
      type: 'item',
      url: '/Institutes',
      icon: icons.AccountBalanceSharpIcon,
      external: true,
      target: true
    },
    {
      id: 'Departments',
      title: 'Departments',
      type: 'item',
      url: '/Departments',
      icon: icons.BusinessOutlinedIcon,
      external: true,
      target: true
    },
    {
      id: 'Events',
      title: 'Events',
      type: 'item',
      url: '/Events',
      icon: icons.EmojiEventsOutlinedIcon,
      external: true,
      target: true
    }
  ]
};

export default support;
