import { Link } from 'react-router-dom'
import '../styles/Home.css'
import { useEffect, useState } from 'react';

const MenuItem = ({ title, description, url, imageUrl }) => {
  return (
    <Link to={url} className="menu-item">
      <img src={imageUrl} alt={title} />
      <div className="menu-item-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

const Menu = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUsers(data.users);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


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
    // Add more items as needed
  ];

  return (<>
    <div className="">
      {users.map((user, i) => {
        return <div key={i} >{user}</div>
      })}
    </div>

    <div className="menu">
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

export default Menu;
