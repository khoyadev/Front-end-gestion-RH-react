import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Collapse from '@mui/material/Collapse';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import EventIcon from '@mui/icons-material/Event';
import ScheduleIcon from '@mui/icons-material/Schedule';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import SettingsIcon from '@mui/icons-material/Settings';
import { Divider, Link } from '@mui/material';


const Sidebar = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List className="sidebar"
      sx={{ width: '100%', maxWidth: 100}}
    
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemIcon>
          
          <Link href="#" underline="none">
          <HomeIcon className="menu-item"/>
          </Link>
        </ListItemIcon>
       
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <PersonIcon className="menu-item"/>
        </ListItemIcon>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <Link href="/Ajout" underline="none">
            <GroupAddIcon sx={{color:"white"}}/>
            </Link>
             
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <Link href="/Liste" underline="none">
            <ReceiptLongIcon sx={{color:"white"}} />
            </Link>
              
            </ListItemIcon>
          </ListItemButton>
          <Divider color="white" />
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
          <EventIcon className="menu-item"/>
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ScheduleIcon className="menu-item"/>
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <HourglassBottomIcon className="menu-item"/>
        </ListItemIcon>
      </ListItemButton>
      <Divider color="white" />
      <ListItemButton>
        <ListItemIcon>
          <SettingsIcon className="menu-item"/>
        </ListItemIcon>
      </ListItemButton>
    </List>
  );
}
export default Sidebar;