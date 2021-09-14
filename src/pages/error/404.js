import { useHistory } from "react-router";
import { Result, Button } from "antd";

export default function NotFoundPage() {
  const history = useHistory();
  const backHomeHandler = () => {
    history.push("/");
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={backHomeHandler}>
          Back Home
        </Button>
      }
    />
  );
}
