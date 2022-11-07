
import Modal from "react-modal"
import CompanyModal from "./CompanyModal";
import CustomerModal from "./CustomerModal";
import MobileUserModal from "./MobileUserModal";
import UserModal from "./UserModal";
import WarrantModal from "./WarrantModal";

const CommonModalComponent = (props: any) => {
    // props로 전달받을 값들
    const {
        commonState,
        commonDispatch,
    } = props;

    const {
        modalOpen
    } = commonState;

    const ModalComponent = (componentTitle: any, props: any) => {
        switch (componentTitle) {
            case "customer":
                return (
                    <CustomerModal {...props} />
                )
            case "warrant":
                return (
                    <WarrantModal {...props} />
                )
            case "webUser":
                return (
                    <UserModal {...props} />
                )
            case "mobileUser":
                return (
                    <MobileUserModal {...props} />
                )
            case "company":
                return (
                    <CompanyModal {...props} />
                )
            default:
                return <></>
        }
    }

    return (
        <Modal
            isOpen={modalOpen}
            onRequestClose={() => commonDispatch({ name: "modalOpen", value: false })}
            shouldCloseOnOverlayClick={false}
            style={{
                overlay: {
                    position: "fixed",
                    zIndex: 1020,
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    background: "rgba(0, 0, 0, 0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                },
                content: {
                    background: "#F4F4F4",
                    top: 0,
                    overflowY: "auto",
                    position: "relative",
                    border: "none",
                    borderRadius: "0.3rem",
                    inset: 0,
                    padding: "0px",
                    margin: "0px 2%",
                    boxShadow: "0px 0px 16px rgba(0,0,0,0.2)"
                },
            }}>
            {modalOpen ? ModalComponent(commonState.componentTitle, props) : null}
        </Modal>
    )
}
export default CommonModalComponent;