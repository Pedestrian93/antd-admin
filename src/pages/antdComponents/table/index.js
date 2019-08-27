// import React, { Component, useReducer, useState } from 'react'
// import ShortID from 'shortid'

// const data = [1, 2, 3, 4, 5, 6]
// function Counter() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//       {data.map(i => (
//         <div key={ShortID.generate()}>i</div>
//       ))}
//     </div>
//   )
// }

// export default Counter

import React from 'react'
import { Tabs, Radio, Table } from 'antd'
import './index.less'

const { TabPane } = Tabs

export default class SlidingTabsDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'top',
    }
  }

  handleModeChange = e => {
    const mode = e.target.value
    this.setState({ mode })
  }

  render() {
    const { mode } = this.state
    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '3',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },

      {
        key: '4',
        name: 'Jim ssGreen',
        age: 409,
        address: 'Londonss Park',
      },
      {
        key: '5',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
    ]
    const columns = [
      {
        title: 'Full Name',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
      },
      {
        title: 'Age',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        // fixed: 'left',
      },
      { title: 'Column 1', dataIndex: 'address', key: '1' },
      { title: 'Column 2', dataIndex: 'address', key: '2' },
      { title: 'Column 3', dataIndex: 'address', key: '3' },
      { title: 'Column 4', dataIndex: 'address', key: '4' },
      { title: 'Column 5', dataIndex: 'address', key: '5' },
      { title: 'Column 6', dataIndex: 'address', key: '6' },
      { title: 'Column 7', dataIndex: 'address', key: '7' },
      { title: 'Column 8', dataIndex: 'address', key: '8' },
      {
        title: 'Action',
        key: 'operation',
        // fixed: 'right',
        width: 100,
        render: () => <a>action</a>,
      },
    ]

    return (
      <div>
        <Radio.Group
          onChange={this.handleModeChange}
          value={mode}
          style={{ marginBottom: 8 }}
        >
          <Radio.Button value="top">Horizontal</Radio.Button>
          <Radio.Button value="left">Vertical</Radio.Button>
        </Radio.Group>
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
          {[...Array(30).keys()].map(i => (
            <TabPane tab={`Tab-${i}`} key={i}>
              {i === 0 && (
                <>
                  <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{ x: 1300 }}
                  />

                  <table className="rtable rtable--flip">
                    <thead>
                      <tr>
                        <th>Browser</th>
                        <th>Sessions</th>
                        <th>Percentage</th>
                        <th>New Users</th>
                        <th>Avg. Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Chrome</td>
                        <td>9,562</td>
                        <td>68.81%</td>
                        <td>7,895</td>
                        <td>01:07</td>
                      </tr>
                      <tr>
                        <td>Firefox</td>
                        <td>2,403</td>
                        <td>17.29%</td>
                        <td>2,046</td>
                        <td>00:59</td>
                      </tr>
                      <tr>
                        <td>Safari</td>
                        <td>1,089</td>
                        <td>2.63%</td>
                        <td>904</td>
                        <td>00:59</td>
                      </tr>
                      <tr>
                        <td>Internet Explorer</td>
                        <td>366</td>
                        <td>2.63%</td>
                        <td>333</td>
                        <td>01:01</td>
                      </tr>

                      {/* <tr>
                        <td style="min-width: 100px;">Other</td>
                        <td>275</td>
                        <td>6.02%</td>
                        <td>90</td>
                        <td>N/A</td>
                      </tr> */}
                    </tbody>
                  </table>
                </>
              )}
            </TabPane>
          ))}
        </Tabs>
      </div>
    )
  }
}
