import Routes from "./routes";
import { NhostClient, NhostProvider } from "@nhost/react";
import { Toaster } from "react-hot-toast";

const App = () => {
  const nhost = new NhostClient({
    subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN,
    region: process.env.REACT_APP_NHOST_REGION,
  });

  return (
    <NhostProvider nhost={nhost}>
      <Routes nhost={nhost} />
      <Toaster />
    </NhostProvider>
  );
};

export default App;