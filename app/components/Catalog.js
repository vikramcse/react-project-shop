var React = require('react');
var CatalogItem = require('./CatalogItem');

var Catalog = React.createClass({
  render() {
    return (
      <div className="row stylish-panel">
        <CatalogItem
          title="Shoes"
          img="http://lorempixel.com/200/200/abstract/1/"
          summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eligendi."
          cost="100"
          qty="50"/>

          <CatalogItem
            title="Shoes"
            img="http://lorempixel.com/200/200/abstract/1/"
            summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eligendi."
            cost="100"
            qty="50"/>

            <CatalogItem
              title="Shoes"
              img="http://lorempixel.com/200/200/abstract/1/"
              summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eligendi."
              cost="100"
              qty="50"/>

              <CatalogItem
                title="Shoes"
                img="http://lorempixel.com/200/200/abstract/1/"
                summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eligendi."
                cost="100"
                qty="50"/>

                <CatalogItem
                  title="Shoes"
                  img="http://lorempixel.com/200/200/abstract/1/"
                  summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eligendi."
                  cost="100"
                  qty="50"/>

                  <CatalogItem
                    title="Shoes"
                    img="http://lorempixel.com/200/200/abstract/1/"
                    summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eligendi."
                    cost="100"
                    qty="50"/>
      </div>
    );
  }
});

module.exports = Catalog;
