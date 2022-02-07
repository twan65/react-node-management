import { Link } from "react-router-dom";

const Errors = () => (
    <div className="error">
      <div className="error__content">
        <h2>404 Not Found</h2>
        <p>お探しのページは見つかりませんでした。</p>
        <Link to={"/"}>Go Back</Link>
      </div>
    </div>
);

export default Errors;
