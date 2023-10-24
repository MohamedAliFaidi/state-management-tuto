import { connect } from "react-redux";

const mapStateToProps = (state  ) => {
  console.log(state);
  return {
    products: state.products.data,
  };
};

const ProductList = (props) => {
  
  return (
    <div>
      {props?.products?.map((post, i) => (
        <div key={i} id={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(ProductList);
