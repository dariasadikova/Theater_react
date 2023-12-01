import React from 'react';
import { Divider, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './App.css'; 

interface DataType {
  key: React.Key;
  title: string;
  genre: string;
  director: string;
  datetime: Date;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Genre',
    dataIndex: 'genre',
  },
  {
    title: 'Director',
    dataIndex: 'director',
  },
  {
    title: 'Datetime',
    dataIndex: 'datetime',
  },
];

const data: DataType[] = [
  {
    key: '1',
    title: 'Вишневый сад',
    genre: 'комедия',
    director: 'Кирилл Серебрянников',
    datetime: '05.02.2024, 19:30',
  },
  {
    key: '2',
    title: 'Отелло',
    genre: 'трагедия',
    director: 'Константин Райкин',
    datetime: '20.04.2024, 18:00',
  },
  {
    key: '3',
    title: 'Евгений Онегин',
    genre: 'опера',
    director: 'Владимир Петров',
    datetime: '19.12.2023, 19:00',
  },
  {
    key: '4',
    title: 'Ромео и Джульетта',
    genre: 'трагедия',
    director: 'Лев Додин',
    datetime: '05.05.2024, 19:00',
  },
  {
    key: '5',
    title: 'Гамлет',
    genre: 'трагедия',
    director: 'Олег Табаков',
    datetime: '15.01.2024, 17:30',
  },
  {
    key: '6',
    title: 'Волки и овцы',
    genre: 'комедия',
    director: 'Владимир Смирнов',
    datetime: '29.01.2024, 19:30',
  },

];

const App: React.FC = () => {
  return (
    <div>
      <Divider />

      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 3 }}
      />
    </div>
  );
};

export default App;
