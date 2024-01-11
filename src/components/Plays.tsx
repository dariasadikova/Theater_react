import React, { useState, useEffect } from 'react';
import { Table, Button, Input } from 'antd';
import '../App.css';
import playsData from '../plays.json';
import { PlayType } from '../interfaces';
import { columns } from '../consts';


const PlaysPage: React.FC = () => { 
  const LIMIT = 10;
  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<PlayType[]>([]);
  const [filterTitle, setFilterTitle] = useState<string>('');
  const [filterGenre, setFilterGenre] = useState<string>('');
  const [filterDirector, setFilterDirector] = useState<string>('');

  const getFilteredData = () => {
    return playsData.filter(play => 
      (filterTitle === "" || play.title.toLowerCase().startsWith(filterTitle.toLowerCase())) &&
      (filterGenre === "" || play.genre.toLowerCase().startsWith(filterGenre.toLowerCase())) &&
      (filterDirector === "" || play.director.toLowerCase().startsWith(filterDirector.toLowerCase()))
    );
  };

  const getPlays = (page: number) => { 
    const filteredData = getFilteredData();
    const totalRecords = filteredData.length;
    const maxPage = Math.ceil(totalRecords / LIMIT) || 1; 
    setPage(Math.min(page, maxPage));

    const startIndex = (page - 1) * LIMIT;
    const selectedPlays = filteredData.slice(startIndex, startIndex + LIMIT);
    setDataSource(selectedPlays);
  };

  useEffect(() => { 
    getPlays(page);
  }, [page, filterTitle, filterGenre, filterDirector]);


  const totalRecords = getFilteredData().length;
  const maxPage = Math.ceil(totalRecords / LIMIT);

  return ( 
    <div className="container">
      <div className="table-and-filters">
        <div className="table-container">
        <Table dataSource={dataSource.map((record) => ({ ...record, key: record.id }))} columns={columns} pagination={false}/>
          <div className="pagination">
            <Button onClick={() => setPage(page - 1)} disabled={page === 1}>Назад</Button> 
            <p>{page}</p> 
            <Button onClick={() => setPage(page + 1)} disabled={page >= maxPage}>Вперед</Button> 
          </div>
        </div>
        <div className="filters">
          <p className="filters_h">фильтры</p>
          <Input 
            placeholder="название" 
            value={filterTitle} 
            onChange={e => setFilterTitle(e.target.value)}
          />
          <Input 
            placeholder="жанр" 
            value={filterGenre} 
            onChange={e => setFilterGenre(e.target.value)}
          />
          <Input 
            placeholder="режиссер" 
            value={filterDirector} 
            onChange={e => setFilterDirector(e.target.value)}
          />
        </div>
      </div>
    </div>
  ); 
}

export default PlaysPage;
