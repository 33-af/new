
import { useTheme } from "@/app/providers/ThemeProvider";
import  MainPage  from "@/pages/Main/ui/MainPage";


import  Header  from "@/widgets/header/ui/Header/Header";



const BaseLayout = () => {
    const { isDark } = useTheme();
    return (
        <div className={`app ${isDark ? 'dark' : 'light'}`}>
            <Header />
            <div className="container">
                <MainPage />
            </div>
        </div>
    );
};

export default BaseLayout;
