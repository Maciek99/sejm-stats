import React, { Suspense } from "react";
import { LoadingSpinner } from "./ui/spinner";

interface LoadableContainerProps {
  children: React.ReactNode;
}

const LoadableContainer: React.FC<LoadableContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto bg-card border rounded shadow-md my-4 md:mx-3 2xl:mx-16 md:px-4 max-md:px-1 py-3">
      <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
    </div>
  );
};

export default LoadableContainer;
