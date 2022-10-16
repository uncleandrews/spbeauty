import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import styled from "styled-components"


function Addresses(props) {
    let minWidth = props.minWidth === undefined ? '453px' : props.minWidth;
    const AddressBlock = styled.div`
    border-radius: 8px;
    border: solid rgba(100,116,139,0.12) 1px;
    border-opacity: 0.12;
    margin-left: 48px;
    margin-right: 72px;
    min-width: ${minWidth};
`;
    
    return (
        <AddressBlock className='d-inline-flex flex-column justify-content-between p-4'>
            {props.children}
            <div className='d-inline-flex flex-column'>
                <div className='title mb-4'>Адреса заведений</div>
                <div className='d-inline-flex flex-column gap-2'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>
            </div>
            <SecondaryButton>Добавить филиал</SecondaryButton>
        </AddressBlock>
    );
}

export default Addresses;