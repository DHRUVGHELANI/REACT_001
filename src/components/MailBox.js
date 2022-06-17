import UnReadMessage from "./UnReadMessage";

const messages = []

function MailBox() {
    return (
        <>
            <h1>Mail Box</h1>
            <UnReadMessage messageArray={messages} />
        </>
    );
}

export default MailBox;