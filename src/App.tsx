import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Divider, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './App.css'; 

interface DataType { 
  name: string; 
  country: string; 
} 

const columns: ColumnsType<DataType> = [ 
{ 
  title: 'Name', 
  dataIndex: 'name', 
  key: 'name', 
  render: (text) => <a >{text}</a>, 
}, 
{ 
  title: 'Country', 
  dataIndex: 'country', 
  key: 'country', 
}, 
]; 

function App() { 
  const LIMIT_LIST_SCHOOL = 10; 
  const [page, setPage] = useState<number>(1) 
  const [dataSource, setDataSource] = useState<DataType[]>() 
  const getUniversity = async (page: number, limit: number) => { 
      const response = await axios.get(`http://universities.hipolabs.com/search?offset=${page*limit}&limit=${limit}`) 
      setDataSource(response.data);     
  } 
  useEffect(() => { 
      getUniversity(page, LIMIT_LIST_SCHOOL) 
  }, [page]) 

  return ( 
      <> 
          <Table dataSource={dataSource} columns={columns} pagination={false}/> 
              <Button onClick={() => setPage(page - 1)} disabled={!(page-1)}>Назад</Button> 
              <p>{page}</p> 
              <Button onClick={() => setPage(page + 1)}>Вперед</Button> 
      </> 
  ) 
} 

export default App;
