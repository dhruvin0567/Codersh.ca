function PostMeta({ industry, technology }) {
  return (
    <div className="post-meta gap-0 gap-md-5">
      <div className="post-category">
        <span className="fw-bold me-2">Industry:</span>
        {industry}
      </div>
      <div className="post-category">
        <span className="fw-bold me-2">Technology:</span>
        {technology}
      </div>
    </div>
  );
}

export default PostMeta;
