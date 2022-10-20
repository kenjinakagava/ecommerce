import styled from "styled-components";

const VinylWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(10%, -50%);
`;

const OuterCircumference = styled.div`
  position: relative;
  width: 285px;
  height: 285px;
  background-color: green;
  border-radius: 50%;
  z-index: 1;
`;

const InnerCircumference = styled.div`
  position: absolute;
  border-radius: 50%;
  z-index: 2;
`;

const RecordLabel = styled.div`
  position: absolute;
  background: url(https://medium-media.vgm.io/albums/28/57682/57682-1463783329.jpg);
  z-index: 3;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SpindleHole = styled.div`
  position: absolute;
  z-index: 4;
  background: linear-gradient(
    360deg,
    hsla(0, 0%, 45%, 1) 10%,
    hsla(0, 0%, 7%, 1) 90%
  );
  width: 16px;
  height: 16px;
  border-radius: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const VinylRecord = () => {
  return (
    <VinylWrapper>
      <OuterCircumference>
        <RecordLabel />
        <SpindleHole />
        <InnerCircumference />
      </OuterCircumference>
    </VinylWrapper>
  );
};

export default VinylRecord;
