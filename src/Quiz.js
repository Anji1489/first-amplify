import React, { useState, useEffect } from 'react';

function DataTable() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch('https://le3q702bda.execute-api.us-west-2.amazonaws.com/Dev/list-data')
      .then((response) => response.json())
      .then((result) => {
        const parsedData = JSON.parse(result.body);
        setData(parsedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleRowClick = (id) => {
    const item = data.find((item) => item.id === id);
    setSelectedItem(item);
  };

  const handleBackClick = () => {
    setSelectedItem(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      {!selectedItem ? (
        <>
          <h2>Student Data</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Marks</th>
                <th style={thStyle}>Age</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => handleRowClick(item.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <td style={tdStyle}>{item.id}</td>
                  <td style={tdStyle}>{item.name}</td>
                  <td style={tdStyle}>{item.marks}</td>
                  <td style={tdStyle}>{item.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <h2>Detail Page for ID: {selectedItem.id}</h2>
          <p><strong>Name:</strong> {selectedItem.name}</p>
          <p><strong>Marks:</strong> {selectedItem.marks}</p>
          <p><strong>Age:</strong> {selectedItem.age}</p>
          <button style={but}  onClick={handleBackClick}>Back to Table</button>
        </>
      )}
    </div>
  );
}

// Styles
const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

const thStyle = {
  border: '1px solid #ddd',
  padding: '8px',
//   backgroundColor: '#f4f4f4',
  textAlign: 'left',
};

const but={
    cursor:'pointer'
}

const tdStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
};

export default DataTable;
