type T_UsualObj = { [key: keyof any]: unknown };

export const removePassword = <
  T extends T_UsualObj,
  K extends keyof T = "passwordHash"
>(
  entity: T,
  key?: K
): Omit<T, K> => {
  const keyToRemove = (key ?? "passwordHash") as K;

  if (!(keyToRemove in entity)) return entity;
  const { [keyToRemove]: _, ...rest } = entity;

  return rest;
};
