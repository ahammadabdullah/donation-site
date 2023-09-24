/* eslint-disable react/no-unescaped-entities */
const Card = ({ data }) => {
  const {
    id,
    image_2,
    title,
    category,
    category_bg_color,
    category_btn_color,
    text_color,
  } = data;
  const titleStyle = {
    color: text_color,
    fontWeight: 600,
    fontSize: 18,
  };
  const bgStyle = {
    backgroundColor: category_bg_color,
    padding: 24,
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  };
  const btnStyle = {
    backgroundColor: category_btn_color,
    color: text_color,
    padding: "4px 12px",
    fontWeight: 500,
    borderRadius: 6,
    fontSize: 14,
  };

  return (
    <div>
      <div className="relative flex max-w-[312px] flex-col rounded-lg bg-white bg-clip-border text-gray-700 ">
        <div className="relative m-0 overflow-hidden rounded-t-lg bg-transparent bg-clip-border text-gray-700 ">
          <img className="h-[194px]" src={image_2} alt={title} />
        </div>
        <div>
          <div style={bgStyle}>
            <button disabled style={btnStyle}>
              {category}
            </button>
            <h4 style={titleStyle}>{title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
