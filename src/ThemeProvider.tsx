import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
} from "react";

export type Theme = "light" | "dark";

export interface ContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ContextType | null>(null);

// Provider 컴포넌트
export const ThemeProvider: FC<
  PropsWithChildren<{ value: { theme: Theme; toggleTheme: () => void } }>
> = ({ children, value }) => {
  // const [theme, setTheme] = useState<Theme>("light");
  // const toggleTheme = useCallback(() => {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // }, []);
  // const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// 커스텀 훅: useTheme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within an ThemeProvider");
  }
  return context;
};
