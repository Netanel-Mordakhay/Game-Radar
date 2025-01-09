import { Title, Text } from "@mantine/core";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Title>Whoops!</Title>
      <Text>
        {isRouteErrorResponse(error)
          ? "This page does not exist"
          : "An unexpected error has occured."}
      </Text>
    </>
  );
};

export default ErrorPage;
