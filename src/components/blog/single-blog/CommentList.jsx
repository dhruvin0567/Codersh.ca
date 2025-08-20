import Team5Img from "../../../assets/images/team/team5.webp";
import Team6Img from "../../../assets/images/team/team6.webp";
import Team7Img from "../../../assets/images/team/team7.webp";

const commentsData = [
  {
    id: crypto.randomUUID(),
    comment:
      "It is a long established fact that a reader will be distrac readable content of a page when looking at its layout. The point of using is that it has two.",
    author: "Ricky Smith",
    date: "June 21, 2023",
    img: Team5Img,
    children: false,
  },
  {
    id: crypto.randomUUID(),
    comment:
      "It is a long established fact that a reader will be distrac readable content of a page when looking at its layout. The point of using is that it has two.",
    author: "Ricky Smith",
    date: "June 21, 2024",
    img: Team6Img,
    children: true,
  },
  {
    id: crypto.randomUUID(),
    comment:
      "It is a long established fact that a reader will be distra readable content of a page when looking its layout. The point of using.",
    author: "Mark Jones",
    date: "June 21, 2024",
    img: Team7Img,
    children: false,
  },
];

function CommentList() {
  return (
    <div className="post-comment">
      <h3>Comments:</h3>
      <ul>
        {commentsData.map((comment) => (
          <li className={`${comment.children && "children"}`} key={comment.id}>
            <div className="post-comment-wrap">
              <div className="post-comment-thumb">
                <img src={comment.img} alt={comment.author} />
              </div>
              <div className="post-comment-data">
                <a className="comment-reply" href="">
                  Reply
                </a>
                <strong>{comment.author}</strong>
                <span>{comment.date}</span>
                <p>{comment.comment}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
