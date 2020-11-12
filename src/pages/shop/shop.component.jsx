import React from "react";
import SHOP_DATA from "./shop_data";
import "./shop.styles.scss";
import { withRouter } from "react-router-dom";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div id={collections.id}>
        {collections.map((collection) => (
          <CollectionPreview
            id={collection.id}
            items={collection.items}
            title={collection.title}
          />
        ))}
      </div>
    );
  }
}

export default withRouter(ShopPage);
