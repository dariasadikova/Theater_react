import type { ColumnsType } from 'antd/es/table';
import { PlayType } from './interfaces'; 

export const columns: ColumnsType<PlayType> = [ 
  { 
    title: 'название', 
    dataIndex: 'title', 
    key: 'title', 
  }, 
  { 
    title: 'жанр', 
    dataIndex: 'genre', 
    key: 'genre', 
  }, 
  { 
    title: 'режиссер', 
    dataIndex: 'director', 
    key: 'director', 
  }, 
]; 


