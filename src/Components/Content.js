import Container from 'react-bootstrap/Container';
import Header from './Header';

const Content = (props) => {
  return (
    <>
      <Header />
      <div className="content">
        <Container>{props.children}</Container>
      </div>
    </>
  );
};

export default Content;
