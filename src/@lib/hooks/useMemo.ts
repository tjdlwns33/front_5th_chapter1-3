import { DependencyList, useRef } from "react";
import { shallowEquals } from "../equalities";

// useMemo 훅은 계산 비용이 높은 값을 메모이제이션합니다.
export function useMemo<T>(
  factory: () => T,
  _deps: DependencyList,
  _equals = shallowEquals,
): T {
  // 직접 작성한 useRef를 통해서 만들어보세요! 이게 제일 중요합니다.

  // 1. 이전 의존성과 결과를 저장할 ref 생성
  // 2. 현재 의존성과 이전 의존성 비교
  // 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장
  // 4. 메모이제이션된 값 반환
  const ref = useRef<{ deps: DependencyList; value: T } | null>(null);
  if (!ref.current || !_equals(ref.current.deps, _deps)) {
    const newValue = factory();
    ref.current = {
      deps: _deps,
      value: newValue,
    };
  }

  return ref.current.value;
}
