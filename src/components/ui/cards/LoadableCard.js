import React from 'react';
import Spinner from "@components/ui/Spinner";
import Card from "@components/ui/Card";

function LoadableCard({ loading = true, children, ...props }) {
  return (
    <Card {...props}>
      {loading ? (
        <Spinner />
      ) : children}
    </Card>
  );
}

export default LoadableCard;
