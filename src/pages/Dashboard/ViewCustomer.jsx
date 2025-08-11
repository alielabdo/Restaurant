import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ViewCustomers = () => {
  const navigate = useNavigate();

  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'John Doe',
      DOB: '1990-05-15',
      phoneNumber: '1234567890',
      password: 'pass123',
      role: 'Customer'
    },
    {
      id: 2,
      name: 'Jane Smith',
      DOB: '1995-08-20',
      phoneNumber: '9876543210',
      password: 'secure456',
      role: 'Admin'
    }
  ]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      setCustomers(customers.filter(customer => customer.id !== id));
    }
  };

  const handleEdit = (id) => {
    const newName = prompt('Enter new name:');
    if (newName) {
      setCustomers(customers.map(customer =>
        customer.id === id ? { ...customer, name: newName } : customer
      ));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Header with Add Customer Button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2>Customer List</h2>
        <button 
          onClick={() => navigate('/AdminDashboard/create_user')}
          style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}
        >
          Add Customer
        </button>
      </div>

      {/* Customer Table */}
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>Name</th>
            <th>DOB</th>
            <th>Phone Number</th>
            <th>Password</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.DOB}</td>
              <td>{customer.phoneNumber}</td>
              <td>{customer.password}</td>
              <td>{customer.role}</td>
              <td>
                <button onClick={() => handleEdit(customer.id)} style={{ marginRight: '10px' }}>
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(customer.id)} 
                  style={{ backgroundColor: 'red', color: 'white' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {customers.length === 0 && (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>No customers found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCustomers;
