export type T_Left<E> = {
  type: "error";
  error: E;
};

export type T_Right<V> = {
  type: "success";
  value: V;
};

export type Either<V, E> = T_Left<E> | T_Right<V>;

export const createLeft = <E>(error:E):T_Left<E> => ({
    error,
    type: 'error'
});

export const createRight = <V>(value: V): T_Right<V> => ({
  type: "success",
  value,
});
