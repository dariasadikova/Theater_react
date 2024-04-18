import {IUniversity} from "../DynamicPagination/university.interface.ts";
import {FC} from "react";
import styled from "styled-components";

const CardStyled = styled.div`
    height: 50px;
    background-color: #888888;
    color: #bb5a5a;
`

const CardUniversity: FC<{ data: IUniversity }> = ({data}) => (
    <CardStyled>
        {data.country} - {data.name}
    </CardStyled>
)

export default CardUniversity;
