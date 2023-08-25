import React, { useState } from 'react';

function ShoppingForm() {

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home")
  };

  return (
    <div>
  
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
        <tr>
          <td>"1"</td>
          <td>"Apples"</td>
          <td>"5"</td>
          <td> 
            <div id="test-checkbox-1">
              <input type="checkbox" />
            </div></td>
          </tr>
          <tr>
          <td>"2"</td>
          <td>"Bananas"</td>
          <td>"2"</td>
          <td> 
            <div id="test-checkbox-2">
              <input type="checkbox" />
            </div></td>
          </tr>
          <tr>
          <td>"3"</td>
          <td>"Bananas"</td>
          <td>"2"</td>
          <td> 
            <div id="test-checkbox-2">
              <input type="checkbox" />
            </div></td>
          </tr>
        </tbody>
      </table>
      <form>
      <label>
        Trash:
        <input type="text" name="trash" id="test-trash-input" />
      </label>
      <label>
        Poop:
        <input type="text" name="poop" id="test-poop-input" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}

export default ShoppingForm;
