import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";

const ThemeChanger = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "system") {
      return setTheme(systemTheme === "dark" ? "light" : "dark");
    }

    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch checked={checked} onCheckedChange={toggleTheme} />
    </div>
  );
};

export default ThemeChanger;
