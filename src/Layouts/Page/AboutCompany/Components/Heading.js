import PrimaryButton from "../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../Components/SecondaryButton";
import styled from "styled-components";

const HeadingBlock = styled.div`
    margin-left: 72px;
    margin-right: 72px;
    margin-top: 64px;
`;

function Heading() {
    return (
        <HeadingBlock className='d-flex flex-row justify-content-between'>
            <h1 className='large-title'>Данные о компании</h1>
            <SecondaryButton>Закрыть запись</SecondaryButton>
        </HeadingBlock>
    );
}

export default Heading;