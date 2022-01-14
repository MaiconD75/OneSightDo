/* eslint-disable @typescript-eslint/no-explicit-any */
import { action } from 'typesafe-actions';
import { ComponentsPropsTypes } from './types';

export const switchFormModalIsOpen = () =>
  action(ComponentsPropsTypes.SWITCH_FORM_MODAL_IS_OPEN);

export const setFormInitialData = (initialData: Record<string, any>) =>
  action(ComponentsPropsTypes.SET_FORM_INITIAL_DATA, { initialData });
