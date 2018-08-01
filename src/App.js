import React from "react";
import { Component } from "react";

/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */
const CardGroup = props => {
  return <div className="cardGroup">{props.children}</div>;
};

// class  extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() {
//         return (  );
//     }
// }

// export default ;

class Card extends Component {
  render() {
    //   const {classes} = this.props
    let classes = "icon fa card__descriptionIcon ";
        if (this.props.icontype === "thumbsup"){
            classes += "fa-thumbs-o-up"
        } else if (this.props.icontype === "trophy") {
            classes += "fa-trophy"
        } else if (this.props.icontype === "bolt"){
            classes += "fa-bolt"
        } else {classes += ""}


    return (
      <div className="card cardGroup__card">
        <div className="card__description cardGroup__cardDescription">
        {this.props.hint && <div className="card_descriptionText">{this.props.hint}</div>}
          <div className={ classes } />
          <div className="card__descriptionText">{this.props.text}</div>
        </div>
        <div className="card__price">{this.props.cardPrice}</div>
      </div>
    );
  }
}

const App = () => (
  <CardGroup>
    <Card text="Free" icontype="thumbsup" cardPrice="Free!" />
    <Card text="Basic tier" icontype="trophy" cardPrice="$10.00" hint="(Most Popular)"/>
    <Card text="Advanced tier" icontype="bolt" cardPrice="$6000.00" hint="(Only for Enterprise Level Professionals)"/>
     {/* <div className="card cardGroup__card">
            <div className="card__description cardGroup__cardDescription">
                <div className="icon fa fa-thumbs-o-up card__descriptionIcon" />
                <div className="card__descriptionText">
                    Trial
                </div>
            </div>
            <div className="card__price">Free!</div>
        </div> 
    <div className="card cardGroup__card">
      <div className="card__description cardGroup__cardDescription">
        <div className="icon fa fa-trophy card__descriptionIcon" />
        <div className="card__descriptionText">
          Basic tier
          <br />
          (most popular)
        </div>
      </div>
      <div className="card__price">$10.00</div>
    </div>
    <div className="card cardGroup__card">
      <div className="card__description cardGroup__cardDescription">
        <div className="icon fa fa-bolt card__descriptionIcon" />
        <div className="card__descriptionText">
          Advanced tier
          <br />
          (only for enterprise-level professionals)
        </div>
      </div>
      <div className="card__price">$6,000.00</div>
    </div> */}
  </CardGroup> 
);

export default App;
