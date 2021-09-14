import { useHistory } from "react-router";
import { Result, Button } from "antd";

export default function UnauthorizedPage() {
  const history = useHistory();
  const backHomeHandler = () => {
    history.push("/");
  };

  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary" onClick={backHomeHandler}>
          Back Home
        </Button>
      }
    />
  );
}
