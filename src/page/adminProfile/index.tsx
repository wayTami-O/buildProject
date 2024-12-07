import Buttons from "@/components/adminPage/Buttons";
import Download from "@/components/adminPage/Download";
import UserInfo from "@/components/profilePage/UserInfo";

function AdminProfilePage() {
    return (
        <>
            <UserInfo />
            <Buttons />
            <Download />
        </>
    );
}

export default AdminProfilePage;