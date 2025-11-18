interface Props{
  icon?: React.ReactNode;
  title: string;
  text: string;
}
export default function FeatureCard({icon,title,text}:Props){
  return(
    <article className="feature-card">
      {icon && <div className="feature-card__icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
