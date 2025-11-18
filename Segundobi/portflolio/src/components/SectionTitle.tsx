interface Props{ kicker:string; title:string; }
export default function SectionTitle({kicker,title}:Props){
  return(
    <header className="section-title">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
    </header>
  );
}
