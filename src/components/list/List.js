import "./list.scss";
import Card from "../card/Card";

const List = ({ items, isDeletable }) => {
  const cards = items.map((item, index) => {
    return (
      <li
        className={`list-container__list__item ${item.id}-${index}`}
        key={`${item.name}-${index}`}
      >
        <Card
          item={item}
          name={`${item.id}-${index}`}
          isDeletable={isDeletable}
        />
      </li>
    );
  });

  return (
    <div className="list-container">
      <ul className="list-container__list">{cards}</ul>
    </div>
  );
};

export default List;
