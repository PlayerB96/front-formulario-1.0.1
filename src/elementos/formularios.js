import styled from 'styled-components';

const colors = {
    borde: "#0075FF",
    error: "#bb2929",
    exito: "#1ed12d"
}

const Formulario = styled.form`
  @media (max-width: 800px){
      grid-template-columns: 1fr;   
  }
`;

const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height:40px;
`;

const GrupoInput = styled.div`
    background: #fff;
    position: relative;
    z-index: 90;
    padding: 10px;
    border-radius: 10px;
`;

const Input = styled.input`
    
    background: #ccc;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
`;


export {Formulario,Label,GrupoInput,Input};