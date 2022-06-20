const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (request, response) => {

    const { string, letter_to_omit } = request.query;
    const stringArray = string.split("");

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].toLowerCase() === letter_to_omit.toLowerCase()) {
            stringArray.splice(i, 1);
            i = i - 1;
        }
    }

    const result = stringArray.join("");
    response.send(result);

});

app.listen(port, () => {

    console.log(`Server is running on port ${port}`);
    
});
