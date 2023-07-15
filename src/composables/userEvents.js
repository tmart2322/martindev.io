import { onMounted, onUnmounted, reactive, ref } from "vue";

export function useWindowEvents() {
  const windowWidth = ref(0);
  const windowHeight = ref(0);

  function handleWindowResize() {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
  }

  onMounted(() => {
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
  });
  onUnmounted(() => window.removeEventListener("resize", handleWindowResize));

  return { windowWidth, windowHeight };
}

const globalCssVariables = reactive({
  backgroundOpacity: "1",
});

export function useGlobalCssVariables() {
  return { globalCssVariables };
}

export function useBreakpoints() {
  const breakpoints = reactive({
    sm: 576,
    md: 786,
    lg: 992,
    xl: 1200,
    xxl: 1600,
  });

  const getBreakpointText = (breakpoint) => {
    return `${breakpoint}px`;
  };

  return { breakpoints, getBreakpointText };
}
