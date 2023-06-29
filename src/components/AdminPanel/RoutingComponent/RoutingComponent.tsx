import { RoutingProps } from "@/types";
import {
  BackButton,
  Icon,
  Item,
  List,
  Text,
  Wrapper,
} from "./RoutingComponent.styled";

const RoutingComponent = ({ routes, isForm, onClick }: RoutingProps) => {
  return (
    <Wrapper>
      <List>
        {routes.map((route, index) => (
          <Item key={index}>
            <Text>{route}</Text>
            {routes.length > 1 && index < routes.length - 1 && <Icon />}
          </Item>
        ))}
      </List>
      {isForm && <BackButton onClick={onClick}>Назад</BackButton>}
    </Wrapper>
  );
};

export default RoutingComponent;
