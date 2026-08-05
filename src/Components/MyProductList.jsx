function MyProductList({ image, title, price, category }) {
  return (
    <div className="p-card">
      <img src={image} alt="" width="150px" />
        <h5>{title}</h5>
        <p><b>Price: ₹{price}</b></p>
        <p><b>{category}</b></p>
        <button>Add to Cart</button>
    </div>
  );
}
export default MyProductList;
