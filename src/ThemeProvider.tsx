import { PropsWithChildren, createContext, useCallback, useContext, useMemo, useState } from "react";

// Theme 타입 정의
export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider 컴포넌트
export const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);
  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  return (<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>)
}

// 커스텀 훅: useTheme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within an ThemeProvider");
  }
  return context;
};