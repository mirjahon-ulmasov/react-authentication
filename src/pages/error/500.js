import { useHistory } from "react-router";
import { Result, Button } from "antd";

export default function ErrorPage() {
  const history = useHistory();
  const backHomeHandler = () => {
    history.push("/");
  };
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <Button type="primary" onClick={backHomeHandler}>
          Back Home
        </Button>
      }
    />
  );
}
