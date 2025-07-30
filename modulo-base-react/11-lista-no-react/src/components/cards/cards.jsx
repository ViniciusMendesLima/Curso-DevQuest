import Card from "../card/card";

const cardTitle = ["Título card 1", "Título card 2", "Título card 3"];

const Cards = () => {
  return (
    <div>
      <h2>Meus cards</h2>
      <div>
        {cardTitle.map((cardTitle,index) => (
            <Card key={index}>
              <h3>{cardTitle}</h3>
              <p>esse é um texto do card 1</p>
            </Card>
          )
        )}
      </div>
    </div>
  );
};

export default Cards;
