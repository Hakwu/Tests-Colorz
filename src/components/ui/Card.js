import React from 'react';
import { Card as MUICard, CardActionArea, CardContent, CardHeader } from "@mui/material";
import Spinner from "@components/ui/Spinner";

function Card({
    title, children, loading = false, touchable = false, contentProps = {}, headerProps = {}, ...props
  }) {

  const content = (
    <CardContent {...contentProps}>
      {children}
    </CardContent>
  );

  return (
    <MUICard {...props}>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {title && <CardHeader title={title} {...headerProps} />}

          {touchable ? (
            <CardActionArea>
              {content}
            </CardActionArea>
          ) : content}
        </React.Fragment>
      )}
    </MUICard>
  );
}

export default Card;

``;
