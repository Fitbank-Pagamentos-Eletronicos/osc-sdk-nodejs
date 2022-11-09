import { ErrorField } from "../../domains/ErrorField";
import { ErrorFields } from "../../domains/ErrorFields";

let errorFields = new ErrorFields();
errorFields.setCode("Código do ErrorFields");
errorFields.setMessage("Msg do ErrorFields");

errorFields.setErrors(
  (() => {
    let errorsField = new ErrorField();
    errorsField.setMessage("Mensagem do ErrorField");
    errorsField.setField("Field do ErrorField");
    return [errorsField];
  })()
);

const json = `{"code":"Código do ErrorFields","message":"Msg do ErrorFields","errors":[{"message":"Mensagem do ErrorField","field":"Field do ErrorField"}]}`;

const serialized = JSON.stringify(errorFields);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);
console.log(`\nIs serialized? ${json === serialized}`);
