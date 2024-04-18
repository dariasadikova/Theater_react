import {FC, useEffect, useState} from "react";
import {IUniversity} from "./university.interface.ts";
import CardUniversity from "../CardUniversity";
import {useInView} from 'react-intersection-observer';
import axios from "axios";
import styled from "styled-components";


const LIMIT_UNIVERSITIES = 15;

const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const BlockObserver = styled.div`
    height: 40px;
    background-color: black;
`

const DynamicPagination: FC = () => {
    const [universities, setUniversities] = useState<Array<IUniversity>>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUniversities()
    }, [currentPage])

    const {ref, inView} = useInView({
        threshold: 1.0,
    });

    useEffect(() => {
        if (inView) {
            setLoading(true);
            setCurrentPage((prev) => prev + 1)
        }
    }, [inView]);

    const fetchUniversities = async () => {
        try {
            const offset = (currentPage - 1) * LIMIT_UNIVERSITIES
            const response = await axios.get(`http://universities.hipolabs.com/search?offset=${offset}&limit=${LIMIT_UNIVERSITIES}`)
            setUniversities((prev) => [...prev, ...response.data])
        } catch (error) {
            console.log('Error fetching univer...', error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <ListStyled>
            <h1>List Universities</h1>
            {
                universities.map((university) => (
                    <CardUniversity data={university} key={university.name}></CardUniversity>
                ))
            }
            {loading && <div>Loading...</div>}
            {!loading && <BlockObserver ref={ref}></BlockObserver>}
        </ListStyled>
    )
}

export default DynamicPagination;

