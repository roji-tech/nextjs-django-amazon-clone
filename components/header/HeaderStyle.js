import styled from "styled-components";

const HeaderStyle = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;

  .logo {
    width: 100px;
    object-fit: contain;
    margin: 0 20px;
    margin-top: 10px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100px;
      object-fit: contain;
      margin: 0 20px;
      margin-top: 10px;
    }
  }
`;

export default HeaderStyle;
