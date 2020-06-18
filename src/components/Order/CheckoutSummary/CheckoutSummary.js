import React from "react";
import classes from "./CheckoutSummary.module.css";
import Button from "../../UI/Button/Button";
import Burger from "../../Burger/Burger";

const checkoutSummary = (props) => {
  return (
    <div className={classes.checkoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{width: "100%", margin: "auto"}}>
          <Burger ingredients={props.ingredients}/>
      </div>
      <Button
      clicked={props.checkoutCancelled} 
      btnType="danger">CANCEL</Button>
      <Button 
      clicked={props.checkoutContinued}
      btnType="success">CONTINUE</Button>
    </div>
  );
};

export default checkoutSummary;
