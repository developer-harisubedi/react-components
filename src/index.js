import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommenDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <h3>Comments</h3>
      <ApprovalCard>
        <CommentDetail
          author="Hari Subedi"
          timeAgo="Todat at 14:45"
          comment="Nice blog post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sangita Dhakal"
          timeAgo="Yesterday at 00:45"
          comment="Very useful article."
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Lok Raj Pathak"
          timeAgo="Todat at 07:00"
          comment="Awesone article."
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
