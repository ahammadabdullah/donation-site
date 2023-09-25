const DonatedCard = ({ data }) => {
  const {
    id,
    image,
    title,
    category,
    category_bg_color,
    category_btn_color,
    text_color,
    amount,
  } = data;
  const titleStyle = {
    fontWeight: 600,
    fontSize: 24,
  };
  const bgStyle = {
    backgroundColor: category_bg_color,
    padding: 24,
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    width: "100%",
  };
  const btnStyle = {
    backgroundColor: category_btn_color,
    color: text_color,
    padding: "4px 12px",
    fontWeight: 500,
    borderRadius: 6,
    fontSize: 14,
  };
  const btnStyleView = {
    padding: "10px 18px",
    backgroundColor: text_color,
    color: "#fff",
    fontWeight: 600,
    fontSize: 18,
    borderRadius: 4,
    marginTop: 12,
  };
  const priceStyle = {
    color: text_color,
    fontSize: 18,
    fontWeight: 600,
  };
  return (
    <div className="w-[400px] md:w-[648px] mx-auto">
      <div className=" flex  flex-row rounded-x bg-clip-border">
        <div className="m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border">
          <img
            src={image}
            alt="image"
            className="h-full md:h-[200px] w-full object-cover"
          />
        </div>
        <div style={bgStyle}>
          <button disabled style={btnStyle}>
            {category}
          </button>
          <h4 style={titleStyle}>{title}</h4>
          <p style={priceStyle}>${amount}</p>
          <button style={btnStyleView}>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default DonatedCard;
