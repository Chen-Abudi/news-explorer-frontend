import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop({ history }) {
  useEffect(() => {
    const notListen = history.listen(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    return () => {
      notListen();
    };
  }, [history]);

  return null;
}

export default withRouter(ScrollToTop);
