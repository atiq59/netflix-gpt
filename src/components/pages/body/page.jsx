import { useRoutes } from "react-router-dom";
import { routesConfig } from "../../routes/page.jsx";

const Body = () => {
  const routes = useRoutes(routesConfig);
  return <div>{routes}</div>;
};

export default Body;