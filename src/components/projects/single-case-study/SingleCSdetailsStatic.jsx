import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FadeInUp from "../../animation/FadeInUp";
import PostMeta from "../../blog/single-blog/PostMeta";

function SingleCSdetailsStatic({ slug }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setError("Missing slug");
      return;
    }

    fetch(`/data/case-studies/${slug}.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then(setData)
      .catch(() => setError("This case study does not exist."));
  }, [slug]);

  if (error) return <div className="text-center py-5">{error}</div>;
  if (!data) return <div className="text-center py-5">Loading...</div>;

  return (
    <>
      <FadeInUp className="post-thumbnail">
        <LazyLoadImage
          src={data.mainImage}
          width={850}
          height={500}
          alt={data.title}
          effect="blur"
          style={{
            border: "5px solid #000",
            borderRadius: "35px",
            overflow: "hidden",
          }}
        />
      </FadeInUp>

      <div className="single-post-content-wrap">
        <PostMeta
          industry={data.meta?.industry}
          technology={data.meta?.technology}
        />
        <div className="entry-content">
          <h3>{data.title}</h3>
          <h4>Overview</h4>
          <p>{data.overview}</p>

          <h4>Defined Goals</h4>
          <div className="aximo-user-interface">
            <ul>
              {data.definedGoals.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <h4 className="mb-2">Project Workflow</h4>
          {data.workflow.map((step, idx) => (
            <div key={idx}>
              <span>{step.label}</span>
              <p>{step.text}</p>
            </div>
          ))}

          <h4>Project Outcomes</h4>
          <p>{data.outcome}</p>
        </div>
      </div>

      {data.images.map((img, idx) => (
        <FadeInUp className="post-thumbnail" key={idx}>
          <LazyLoadImage
            src={img}
            width={850}
            height={500}
            alt={`case-study-${idx}`}
            effect="blur"
            style={{
              border: "5px solid #000",
              borderRadius: "23px",
              overflow: "hidden",
            }}
          />
        </FadeInUp>
      ))}
    </>
  );
}

export default SingleCSdetailsStatic;
