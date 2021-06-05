import React from 'react';

const Item = () => {
  const data = [
    { icon: '', title: 'Title-1sadsd' },
    { icon: '', title: 'Title-2asdad' },
    { icon: '', title: 'Title-3' },
    { icon: '', title: 'Title-4' },
    { icon: '', title: 'Title-5' },
  ];
  return (
    <div className="item_container">
      {data.map((el) => (
        <div className="item">
          <i class="bi bi-bag-fill"></i>
          <p className="text-center">{el.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Item;
