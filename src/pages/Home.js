import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';

import { Outlet } from 'react-router-dom';
import Header from '@components/header/Header';
import Sidebar from '@components/sidebar/Sidebar';

const posts = [
  { id: 1, author: 'John Doe', content: 'Just had an amazing day at the beach!', avatar: '/avatars/01.png' },
  { id: 2, author: 'Jane Smith', content: 'Check out my new artwork!', avatar: '/avatars/02.png' },
  { id: 3, author: 'Bob Johnson', content: 'Excited for the upcoming concert this weekend!', avatar: '/avatars/03.png' }
];

const Home = () => {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <Outlet />
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
