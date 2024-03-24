import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


const MenuItem = ({ title, description, url, imageUrl }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    console.log(title)
    console.log(url)
    navigate(url)
  }
  return (
    <Card onClick={handleCardClick}>
      <CardHeader>
        <img alt='card-{title}' src={imageUrl}></img>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

const GameMenu = () => {

  const menuItems = [
    {
      title: 'Duel',
      description: 'Speel een duel tegen 1 andere speler',
      url: '/duel',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Scoreboard2',
      description: 'Bekijk het scorebord',
      url: '/scorebord',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Scoreboard2',
      description: 'Bekijk het scorebord',
      url: '/scorebord',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Scoreboard2',
      description: 'Bekijk het scorebord',
      url: '/scorebord',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Scoreboard2',
      description: 'Bekijk het scorebord',
      url: '/scorebord',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Scoreboard2',
      description: 'Bekijk het scorebord',
      url: '/scorebord',
      imageUrl: 'https://via.placeholder.com/150'
    },
    // Add more items as needed
  ];

  return (<>
    <div className='p-4'>
      <h1 className='text-3xl font-bold'>Menu Items</h1>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 p-2">
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          title={item.title}
          description={item.description}
          url={item.url}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  </>);
}

export default GameMenu;
