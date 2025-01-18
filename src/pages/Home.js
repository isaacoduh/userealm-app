import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@components/ui/dropdown-menu';
import { Button } from '@components/ui/button';
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
import { Link } from 'react-router-dom';

const posts = [
  { id: 1, author: 'John Doe', content: 'Just had an amazing day at the beach!', avatar: '/avatars/01.png' },
  { id: 2, author: 'Jane Smith', content: 'Check out my new artwork!', avatar: '/avatars/02.png' },
  { id: 3, author: 'Bob Johnson', content: 'Excited for the upcoming concert this weekend!', avatar: '/avatars/03.png' }
];

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

const Home = () => {
  return (
    <>
      <div className="flex h-screen">
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
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <img className="h-8 w-auto" src="" alt="logo" />
                  </div>
                </div>
                <div className="flex items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="" alt="@avatar" />
                          <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">shadcn</p>
                          <p className="text-xs leading-none text-muted-foreground">m@example.com</p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </nav>
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">
              <div className="space-y-4">
                {posts.map((post) => (
                  <Card key={post.id}>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={post.avatar} />
                          <AvatarFallback>{post.author[0]}</AvatarFallback>
                        </Avatar>
                        <CardTitle>{post.author}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{post.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
