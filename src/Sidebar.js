import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/StorefrontOutlined';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow
        src='https://menshaircuts.org/wp-content/uploads/2018/02/18722314_792145410945736_3013001553364647936_n1-1068x1335.jpg'
        title='David De Castro'
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title='COVID-19 Information Center'
      />
      <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
      <SidebarRow Icon={PeopleIcon} title='Friends' />

      <SidebarRow Icon={ChatIcon} title='Message' />
      <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
      <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
      <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace' />
    </div>
  );
}

export default Sidebar;
