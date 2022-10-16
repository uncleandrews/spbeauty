import Profile from "./Components/Profile/Profile";
import Preferences from "./Components/Preferences";
import styled from "styled-components";

const GeneralBlock = styled.div`
    margin-left: 72px;
    margin-right: 48px;
`;

function General() {
    return (
        <GeneralBlock className='d-inline-flex flex-column'>
            <Profile/> {/* Фото компании, название, тип и адрес */}
            <Preferences/> {/* Инпуты, где можно поменять название, тип и адрес */}
        </GeneralBlock>
    );
}

export default General;