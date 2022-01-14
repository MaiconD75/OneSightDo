/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-shadow */
export const enum ComponentsPropsTypes {
  SWITCH_FORM_MODAL_IS_OPEN = '@components/SWITCH_FORM_MODAL_IS_OPEN',
  SET_FORM_INITIAL_DATA = '@components/SET_FORM_INITIAL_DATA',
}

export interface ComponentsProps {
  formModalIsOpen: boolean;
  initialData: Record<string, any>;
}

export interface ComponentsPropsState {
  readonly data: ComponentsProps;
}
