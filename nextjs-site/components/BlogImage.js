import { PhotoPlaceholder } from "./ui";

export default function BlogImage({ post, ratio, radius = 24 }) {
  if (post.image) return <img src={post.image} alt={post.imageAlt || post.title} loading="lazy" style={{ width: "100%", aspectRatio: ratio, objectFit: "cover", borderRadius: radius, display: "block", background: "var(--grey-bg)" }} />;
  return post.imageAlt ? <PhotoPlaceholder label={post.imageAlt} aspectRatio={ratio} radius={radius + "px"} /> : null;
}
