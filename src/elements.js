import React from "react";
import ButtonComponet from "./elements/button";
import ModalFooterComponet from "./elements/modal-footer";
import ModalHeaderComponet from "./elements/modal-header";
import ModalBodyComponet from "./elements/modal-body";
import ModalWrapperComponet from "./elements/modal-wrapper";
import SelectComponet from "./elements/select";
import TextInputComponet from "./elements/text-input";
import CheckboxComponet from "./elements/checkbox";
import CampaignStatusComponet from "./elements/campaign-status";
import BoxComponet from "./elements/box";

export const Button = ({ ...props }) => <ButtonComponet {...props} />;
export const ModalFooter = ({ ...props }) => <ModalFooterComponet {...props} />;
export const ModalHeader = ({ ...props }) => <ModalHeaderComponet {...props} />;
export const ModalBody = ({ ...props }) => <ModalBodyComponet {...props} />;
export const ModalWrapper = ({ ...props }) => (
  <ModalWrapperComponet {...props} />
);
export const Select = ({ ...props }) => <SelectComponet {...props} />;
export const TextInput = ({ ...props }) => <TextInputComponet {...props} />;
export const Checkbox = ({ ...props }) => <CheckboxComponet {...props} />;
export const CampaignStatus = ({ ...props }) => (
  <CampaignStatusComponet {...props} />
);
export const Box = ({ ...props }) => <BoxComponet {...props} />;

export default exports;
