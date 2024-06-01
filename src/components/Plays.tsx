import React from "react";
import { Input } from "antd";
import "../App.css";
import DynamicPagination from "./DynamicPagination";

const PlaysPage: React.FC = () => {
  return (
    <div className="container">
      <div className="table-and-filters">
        <div className="table-container">
          <DynamicPagination />
        </div>
        <div className="filters">
          <p className="filters_h">Фильтры</p>
          <Input placeholder="Название" />
          <Input placeholder="Жанр" />
          <Input placeholder="Режиссер" />
        </div>
      </div>
    </div>
  );
};

export default PlaysPage;
