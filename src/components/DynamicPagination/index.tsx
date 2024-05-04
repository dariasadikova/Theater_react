import React, { useEffect, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { Table } from "antd";
import styled from "styled-components";
import playsData from "../../plays.json";
import { PlayType } from "../../interfaces";
import { columns } from "../../consts";

const LIMIT = 10;

const PlaysWrapper = styled.div`
  max-height: 400px; 
  overflow-y: auto; 
`;

const DynamicPagination: React.FC = () => {
  const [plays, setPlays] = useState<PlayType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const loadMorePlays = useCallback(() => {
    setLoading(true);
    const startIndex = (currentPage - 1) * LIMIT;
    const newPlays = playsData.slice(startIndex, startIndex + LIMIT);
    setPlays((prev) => [...prev, ...newPlays]);
    setLoading(false);
  }, [currentPage]);

  useEffect(() => {
    loadMorePlays();
  }, [loadMorePlays]);

  useEffect(() => {
    if (inView && !loading) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [inView, loading]);

  return (
    <PlaysWrapper>
      <Table dataSource={plays.map((record) => ({ ...record, key: record.id }))} columns={columns} pagination={false} />
      <div ref={ref} style={{ height: "1px" }} />
</PlaysWrapper>
  );
};

export default DynamicPagination;
