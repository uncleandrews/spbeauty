import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
    color: #0F172A;
`;

const ButtonLeftWrapper = styled.div`
    &:hover {
        opacity: 80%;
    }
`;
const ButtonRightWrapper = styled.div`
    &:hover {
        opacity: 80%;
    }
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch gap-2 py-3'>
            <Option className='flex-grow-1'>{props.children}</Option>
            <ButtonLeftWrapper>
                <IconOnlyButton icon={<EditIcon/>}/>
            </ButtonLeftWrapper>
            <ButtonRightWrapper>
               <IconOnlyButton icon={<RemoveIcon/>}/>
            </ButtonRightWrapper>
        </div>
    );
}

export default ListElement;