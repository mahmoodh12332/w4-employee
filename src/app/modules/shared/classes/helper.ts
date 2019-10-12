class $Helper {
  isDateString(str: string) {
    const regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    return regex.test(str);
  }
}

export const Helper = new $Helper();
