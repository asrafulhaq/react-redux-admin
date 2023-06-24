import { createBrowserRouter } from "react-router-dom";
import publicRouter from "./publicRouter";
import privateRouter from "./privateRouter";

// create browser router
const router = createBrowserRouter([...publicRouter, ...privateRouter]);

// export router
export default router;
