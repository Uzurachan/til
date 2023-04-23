import { Ref } from "nuxt/dist/app/compat/capi";

type CounterState = {
  count: number;
}

export const useCounterStore = () => {
  const state = useState<CounterState>("counter_state", () => ({
    count: 0
  }));
  return {
    state: readonly(state),
    countUp: countUp,
    setCount: setCount
  };
};

const countUp = (state: Ref<CounterState>) => {
  return () => state.value.count++;
}

const setCount = (state: Ref<CounterState>) => {
  return (count: number) => (state.value.count = count);
}
