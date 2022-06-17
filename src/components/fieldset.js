import React from "react";
function fieldset() {
    return (
        <>
            <fieldset>
                <legend>Gender</legend>
                Male <input name="gender" type="radio" value="male" />
                Female <input name="gender" type="radio" value="female" />
            </fieldset>
        </>
    );
}

export default fieldset;