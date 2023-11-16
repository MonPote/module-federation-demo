import React from "react";
import { RemoteAppLoader } from "./RemoteAppLoader";
import { FederatedButton } from "./FederatedComponent";
import { Provider } from "./Provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <RemoteAppLoader>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <div>
            Shell-ui
            <FederatedButton />
          </div>
        </Provider>
      </QueryClientProvider>
    </RemoteAppLoader>
  );
}
