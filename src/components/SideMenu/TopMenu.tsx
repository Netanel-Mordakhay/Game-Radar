import { Button, Group, List, Title } from "@mantine/core";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const TopMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Title order={4} size={24} mb={5}>
        Menu
      </Title>
      <List listStyleType="none">
        <List.Item my={2}>
          <Button
            size="md"
            variant={location.pathname === "/" ? "light" : "subtle"}
            color="gray"
            onClick={() => {
              location.pathname !== "/" && navigate("/");
            }}
          >
            <Group>
              <FaHome size="32px" /> Homepage
            </Group>
          </Button>
        </List.Item>
      </List>
    </>
  );
};

export default TopMenu;
