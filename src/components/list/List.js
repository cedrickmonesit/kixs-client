import "./list.scss";
import Card from "../card/Card";

const List = ({ items, isDeletable, showButtons }) => {
  const cards = items.map((item, index) => {
    return (
      <li id={`${item.id}-${index}`} className={`list-container__list__item`} key={`${item.name}-${index}`}>
        <Card item={item} name={`${item.id}-${index}`} showButtons={showButtons} isDeletable={isDeletable} />
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
