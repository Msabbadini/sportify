import Header from "@/components/navigation/header/header";
import Sidebar from "@/components/navigation/sidebar/sidebar";
import ContainerLayout from "@/layouts/generic/container";

const ErrorPage = () => {
    return (
        <>
        <Header/>
        <Sidebar/>
        <ContainerLayout>
               <div>
            404
            </div>
        </ContainerLayout>
        </>
    );
};

export default ErrorPage;