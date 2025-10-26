import CardComponent from "./_components/CardComponent";
import { CardDB } from "./_data/CardInfo";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",  
        alignItems: "center",     
        minHeight: "100vh",       
        width: "100%",
   
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",         
          gap: "20px",              
          justifyContent: "center",  
          alignItems: "center",      
        }}
      >
        {CardDB.map((card) => (
          <CardComponent
            key={card.id}
            id={card.id}
            name={card.name}
            price={card.price}
            description={card.description}
            category={card.category}
            url={card.url}
          />
        ))}
      </div>
    </div>
  );
}
