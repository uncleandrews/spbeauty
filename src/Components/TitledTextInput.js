import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: solid #E2E8F0 1px;
    background-color: #F8FAFC;
    color: #0F172A;
    &:hover {
        background-color: #F8FAFCB8;
        color: #94A3B8;
    }
`;

const Caption = styled.div`
    color: #94A3B8;
 `;   

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<Caption className='caption'>{title}</Caption>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='p-2' defaultValue={def}></Input>
        </div>
    );
}

export default TitledTextInput;