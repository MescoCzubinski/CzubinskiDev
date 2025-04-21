export default function Header({ setIsDark, isDark, isUS, setIsUS }: HeaderProps) {
  return (
    <header>
      <div className="w-full flex justify-end gap-3 p-2 items-center">
        <button onClick={() => setIsDark(!isDark)} className="w-8 h-8">
          <img src={isDark ? "/icon/icon_theme_light.png" : "/icon/icon_theme_dark.png"} alt="theme icon" />
        </button>
        <button onClick={() => setIsUS(!isUS)} className="w-10 h-10">
          <img src={isUS ? "/icon/icon_flag_pl.png" : "/icon/icon_flag_us.png"} alt="flag icon" />
        </button>
        {/* <button onClick={() => setIsDark(!isDark)} className="w-10 h-10">
          <img src={isDark ? "/icon/icon_hamburger_light.png" : "/icon/icon_hamburger_dark.png"} alt="menu icon" />
        </button> */}
      </div>
    </header>
  );
}
