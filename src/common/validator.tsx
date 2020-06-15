import React from "react"
export  const updateValidators = (fieldName:any, value:any, validators:any) => {
    validators[fieldName].errors = [];
    validators[fieldName].state = value;
    validators[fieldName].valid = true;
    validators[fieldName].rules.forEach((rule:any) => {
        if (!rule.test(value)) {
            validators[fieldName].errors.push(rule.message);
            validators[fieldName].valid = false;
        }

    });
    return validators
}
export  const displayValidationErrors = (fieldName:any ,validators:any) => {
    let validator = validators[fieldName];
    const result = '';
    if (validator && !validator.valid) {
        const errors = validator.errors.map((info:any, index:any) => {
            return <span className="error" key={index}>* {info}</span>;
        });

        return (
            <div className="col s12 row">
                {errors}
            </div>
        );
    }
    return result;
}
export  const  isFormValid=(validators:any)=> {
    let status = true;
    Object.keys(validators).forEach((field) => {
      if (!validators[field].valid) {
        status = false;
      }
    });
    return status;
  }