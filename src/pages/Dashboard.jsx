import React from 'react'

import Table from '../components/table/Table'

import userList from '../assets/JsonData/user-list.json'

const customerTableHead = [
  '',
  'name',
  'email',
  'phone',
  'username',
  'date of birth',
  'address'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
  <tr key={index}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.username}</td>
      <td>{item.dob}</td>
      <td>{item.address}</td>
  </tr>
)

const Dashboard = () => {
  return (
    <div>
      <h2 className='page-header'>
        User Table
      </h2>
      <div className='row'>
        <div className='col-12'>
          <div className='card'>
            <div className='card__body'> 
            <Table
                limit='10'
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={userList}
                renderBody={(item, index) => renderBody(item, index)}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
