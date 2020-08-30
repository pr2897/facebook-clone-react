import React from 'react';
import './sidebar.css';

import SidebarRow from '../SidebarRow/SidebarRow';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="data:image/jpeg;base64,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"
        title="Piyush Raj"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="MarketPlace" />
    </div>
  );
}

export default Sidebar;
