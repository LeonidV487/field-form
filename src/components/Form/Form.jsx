import React from "react";
import classes from './Form.module.css';
import TextInput from "./TextInput/TextInput";
import BusinessArea from "./BusinessArea/BusinessArea";
import Description from "./Description/Description";
import FileAttachment from "./FileAttachment/FileAttachment";
import Button from "./Button/Button";

const Form = (props) => {
    return (
        <div className={classes.mainWrapper}>
           <TextInput companyInput={props.state.companyInput} dispatch={props.dispatch}/>
           <BusinessArea businessInput={props.state.businessInput} dispatch={props.dispatch}/>
           <Description descriptionInput={props.state.descriptionInput} dispatch={props.dispatch}/>
           <FileAttachment />
           <Button state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default Form;