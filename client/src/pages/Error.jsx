import { useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";

const Error = () => {
  const error=useRouteError();

  if(error.status===404){
    return (
        <Wrapper>
            <div>
                <img src={img} alt="not-found" />
                <h3>Ohhh! Page is not found</h3>
                <p>We can't seem to find the page</p>
                <Link to="/dashboard">Back Home</Link>
            </div>
        </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h1>Something Went Wrong</h1>
      </div>
    </Wrapper>
  );
};
export default Error;
