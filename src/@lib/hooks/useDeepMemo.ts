/* eslint-disable react-hooks/exhaustive-deps */
import { DependencyList } from "react";
import { useMemo } from "./useMemo";
import { deepEquals } from "../equalities";

// useDeepMemo 훅은 깊은 비교를 사용하여 값을 메모이제이션합니다.
export function useDeepMemo<T>(factory: () => T, deps: DependencyList): T {
  // 1. useMemo를 사용하되, 비교 함수로 deepEquals를 사용
  return useMemo(factory, deps, deepEquals);
}
