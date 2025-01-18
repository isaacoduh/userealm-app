import { Link } from 'react-router-dom';
import {
  FaNewspaper,
  FaComments,
  FaUsers,
  FaUserPlus,
  FaHeart,
  FaImages,
  FaVideo,
  FaRegBell,
  FaRegUser
} from 'react-icons/fa';
import { Button } from '../ui/button';
export const sideBarItems = [
  { index: 1, name: 'Streams', url: '/app/social/streams', iconName: 'FaNewspaper' },
  { index: 2, name: 'Chat', url: '/app/social/chat/messages', iconName: 'FaComments' },
  { index: 3, name: 'People', url: '/app/social/people', iconName: 'FaUsers' },
  { index: 4, name: 'Following', url: '/app/social/following', iconName: 'FaUserPlus' },
  { index: 5, name: 'Followers', url: '/app/social/followers', iconName: 'FaHeart' },
  { index: 6, name: 'Photos', url: '/app/social/photos', iconName: 'FaImages' },
  { index: 7, name: 'Videos', url: '/app/social/videos', iconName: 'FaVideo' },
  { index: 8, name: 'Notifications', url: '/app/social/notifications', iconName: 'FaRegBell' },
  { index: 9, name: 'Profile', url: '/app/social/profile', iconName: 'FaRegUser' }
];

const iconComponents = {
  FaNewspaper,
  FaComments,
  FaUsers,
  FaUserPlus,
  FaHeart,
  FaImages,
  FaVideo,
  FaRegBell,
  FaRegUser
};

const Sidebar = () => {
  return (
    <>
      {/* Sidebar */}
      <aside className="w-64 h-screen bg-gray-100 p-4">
        <nav>
          <ul className="space-y-2">
            {sideBarItems.map((item) => {
              const IconComponent = iconComponents[item.iconName];
              return (
                <li key={item.index}>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to={item.url} className="flex items-center space-x-2">
                      <IconComponent className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
