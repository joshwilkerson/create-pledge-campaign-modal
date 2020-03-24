import React from "react";

import ButtonComponet from "./elements/button";
import SelectComponet from "./elements/select";
import TextInputComponet from "./elements/text-input";
import TextareaComponent from "./elements/textarea";
import CheckboxComponet from "./elements/checkbox";
import BoxComponet from "./elements/box";
import InlineConfirmButtonComponent from "./elements/inline-confirm-button";

export const Button = ({ ...props }) => <ButtonComponet {...props} />;
export const Select = ({ ...props }) => <SelectComponet {...props} />;
export const TextInput = ({ ...props }) => <TextInputComponet {...props} />;
export const Textarea = ({ ...props }) => <TextareaComponent {...props} />;
export const Checkbox = ({ ...props }) => <CheckboxComponet {...props} />;

export const Box = ({ ...props }) => <BoxComponet {...props} />;
export const InlineConfirmButton = ({ ...props }) => (
  <InlineConfirmButtonComponent {...props} />
);

export default exports;
