function UnReadMessage(props) {
    const { messageArray } = props
    return (

        <>
            {/* {
                messageArray.length > 0 && <h1>You Have {messageArray.length} Un-Read Message</h1>
            } */}

            {
                messageArray.length > 0 ? <h1>You Have {messageArray.length} Un-Read Message</h1> : <h1>You Have Not any messages</h1>
            }
        </>
    );
}

export default UnReadMessage;