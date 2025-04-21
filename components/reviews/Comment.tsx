"use client";

import { useState } from "react";
import { Button } from "../ui/button";

const Comment = ({ comment }: { comment: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  const longComment = comment.length > 130;

  const displayComment =
    longComment && !isExpanded ? `${comment.slice(0, 130)}...` : comment;

  return (
    <div>
      <p className="text-sm">{displayComment}</p>

      {longComment && (
        <Button
          variant={"link"}
          onClick={toggleExpanded}
          className="pl-0 text-muted-foreground"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      )}
    </div>
  );
};

export default Comment;
