export const PHONE_NUMBER_REGEX =
  /^\+38[\s]+[0-9]{3}[\s]+[0-9]{3}[\s]+[0-9]{4}$/;

export const EMAIL_REGEX_RU = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+(?<!\.ru)$/i;

export const EMAIL_REGEX = /^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

export const NAME_REGEX = /^(?!(?:\S*\s){30,})\S*(?:\s\S+\s*)*$/;

export const COMMENT_REGEX = /^(?!\s+$)[\s\S]*$/;

export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,14})/;
