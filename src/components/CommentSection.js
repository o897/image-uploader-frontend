// src/components/CommentSection.jsx
import React, { useState } from "react";

const initialComments = [
  {
    id: 1,
    user: "John Doe",
    avatar: "https://i.pravatar.cc/40?img=1",
    text: "This design looks amazing!",
    time: "2h ago",
    likes: 4,
    replies: [
      {
        id: 2,
        user: "Jane Smith",
        avatar: "https://i.pravatar.cc/40?img=2",
        text: "I agree! Very clean UI.",
        time: "1h ago",
        likes: 1,
        replies: [],
      },
    ],
  },
];

function Comment({ comment }) {
  const [likes, setLikes] = useState(comment.likes);

  return (
    <div className="comment">
      <img src={comment.avatar} className="avatar" />

      <div className="comment-body">
        <div className="comment-header">
          <span className="username">{comment.user}</span>
          <span className="time">{comment.time}</span>
        </div>

        <p className="comment-text">{comment.text}</p>

        <div className="actions">
          <button onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
          <button>Reply</button>
        </div>

        {comment.replies.length > 0 && (
          <div className="replies">
            {comment.replies.map((reply) => (
              <Comment key={reply.id} comment={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CommentSection() {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  function addComment() {
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      user: "You",
      avatar: "https://i.pravatar.cc/40",
      text: newComment,
      time: "Just now",
      likes: 0,
      replies: [],
    };

    setComments([comment, ...comments]);
    setNewComment("");
  }

  return (
    <div className="comment-section">
      <h2>Comments</h2>

      <div className="comment-input">
        <img src="https://i.pravatar.cc/40" className="avatar" />
        <textarea
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={addComment}>Post</button>
      </div>

      <div className="comments-list">
        {comments.map((c) => (
          <Comment key={c.id} comment={c} />
        ))}
      </div>
    </div>
  );
}
