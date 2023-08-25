import React, { useState } from 'react';

function ShoppingForm() {
  const [items, setItems] = useState([]);
  const [position, setPosition] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [found, setFound] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { position, name, quantity, found };
    setItems([...items, newItem]);
    setPosition('');
    setName('');
    setQuantity('');
    setFound(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Position:
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
        </label>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Quantity:
          <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
        <label>
          Found:
          <input type="checkbox" checked={found} onChange={() => setFound(!found)} />
        </label>
        <button type="submit">Add Item</button>
      </form>
      
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Found</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.position}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.found ? '✔' : '❌'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShoppingForm;
