import styled from "styled-components/macro";

const VinylCircumference = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    &::before {
      content: "";
      position: absolute;
      outline: 1px solid rgba(0, 0, 0, 0.5);
      background: none;
      border-radius: 50%;
      width: 200px;
      height: 200px;
      z-index: 10;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &::after {
      content: "";
      position: absolute;
      outline: 1px solid rgba(0, 0, 0, 0.5);
      background: none;
      border-radius: 50%;
      width: 250px;
      height: 250px;
      z-index: 10;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  } ;
`;

const VinylWrapper = styled(VinylCircumference)`
  transform: translate(10%, -50%);
  &::before {
  }
`;

const OuterCircumference = styled.div`
  position: relative;
  width: 285px;
  height: 285px;
  outline: 1px solid rgba(0, 0, 0, 0);
  background: linear-gradient(
    235deg,
    hsla(0, 0%, 100%, 1) 0%,
    hsla(0, 0%, 0%, 1) 20%,
    hsla(0, 0%, 0%, 1) 80%,
    hsla(0, 0%, 100%, 1) 100%
  );
  border-radius: 50%;
  z-index: 1;
`;

const InnerCircumference = styled(VinylCircumference)`
  background-color: #15151a;
  width: 142px;
  height: 142px;
  outline: 1px solid rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

const RecordLabel = styled(VinylCircumference)`
  background: url(https://medium-media.vgm.io/albums/28/57682/57682-1463783329.jpg);
  z-index: 3;
  width: 160px;
  height: 160px;
`;

const SpindleHole = styled(VinylCircumference)`
  z-index: 4;
  background: linear-gradient(
    360deg,
    hsla(0, 0%, 45%, 1) 10%,
    hsla(0, 0%, 7%, 1) 90%
  );
  width: 16px;
  height: 16px;
  border-radius: 16px;
  &::before {
    width: 32px;
    height: 32px;
    outline: 1px solid rgba(0, 0, 0, 0.05);
    background: rgba(0, 0, 0, 0.03);
  }
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
