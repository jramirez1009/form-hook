import React from'react';

const FormTable =  (props) => { 
    const data = props.data
    return (
        <div>
            {props.data.length === 0 
            ?
            <div>No data to display</div>:

            <table className="table">
            <thead>
              <tr>
                <th scope="col">Country</th>
                <th scope="col">Direction</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Age</th>
                <th scope="col">Phone</th>
            
              </tr>
            </thead>
            <tbody>
              {data.map((arr, index) => (
                <tr key={index}>
                  <td>{arr.country}</td>                
                  <td>{arr.name}</td>                
                  <td>{arr.direction}</td>                
                  <td>{arr.email}</td>                
                  <td>{arr.age}</td>                
                  <td>{arr.phone}</td>                
                </tr>
              ))}
            </tbody>
          </table>
            }
           
        </div>
    )
}

export default FormTable