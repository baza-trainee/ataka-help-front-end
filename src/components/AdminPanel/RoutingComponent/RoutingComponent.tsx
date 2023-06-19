import {
  BackButton,
  Icon,
  Item,
  List,
  Wrapper,
} from "./RoutingComponent.styled";

type RoutingProps = {
  routes: string[];
  isForm?: boolean;
  onClick?: () => void;
};

const RoutingComponent = ({ routes, isForm, onClick }: RoutingProps) => {
  return (
    <Wrapper>
      <List>
        {routes.map((route, index) => (
          <>
            <Item key={index}>{route}</Item>
            {routes.length > 1 && index < routes.length - 1 && <Icon />}
          </>
        ))}
      </List>
      {isForm && <BackButton onClick={onClick}>Назад</BackButton>}
    </Wrapper>
  );
};

export default RoutingComponent;
