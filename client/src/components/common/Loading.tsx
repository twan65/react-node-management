import { Container } from "@mui/material";

const Loading = () => {
  return (
    <Container fixed>
      <div className="error">
        <div className="error__content">
          <h4>Loading...</h4>
        </div>
      </div>
    </Container>
  );
};

export default Loading;
