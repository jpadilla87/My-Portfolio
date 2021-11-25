function getBotResponse(input) {
    if (input == "O-" || "o-" || "o -" || "O -") {
        return "O negative blood type (O-) can be donated universally across all other blood types, however it can only receive O- blood.";
    } else if (input == "O+" || "o+" || "o +" || "O +") {
        return "O positive blood type (O+) can be donated to any red blood cells that are positive (A+, B+, O+, & AB+), however it can only receive O- blood & O+ blood.";
    } else if (input == "A-" || "a-" || "a -" || "A -") {
        return "A negative blood type (A-) can be donated to A-, A+, AB-, & AB+ blood types, however it can only receive A- & O- blood.";
    } else if (input == "A+" || "a+" || "a +" || "A +") {
        return "A positive blood type (A+) can be donated to A+, & AB+ blood types, however it can receive O-, O+, A-, & A+ blood.";
    } else if (input == "B-" || "b-" || "b -" || "B -") {
        return "B negative blood type (B-) can be donated to B-, B+, AB-, & AB+ blood types, however it can only receive B-, & O- blood.";
    } else if (input == "B+" || "b+" || "b +" || "B +") {
        return "B positive blood type (B+) can be donated to B+, & AB+ blood types, however it can receive B+, B-, O+, & O- blood.";
    } else if (input == "AB-" || "ab-" || "ab -" || "AB -") {
        return "AB negative blood type (AB-) can be only donated to AB-, & AB+ blood types, however it can receive A-, B-, AB- & O- blood.";
    } else if (input == "AB+" || "ab+" || "ab +" || "AB +") {
        return "AB positive blood type (AB+) can be only donated to AB+ blood types, however it can receive any blood type.";
    }

    if (input == "hello" || "Hello") {
        return "Hello there!"
    } else if(input == "goodbye" || "bye" || "good bye") {
        return "Talk to you later!";
    } else if(input == "Thank you!") {
        return "You're welcome!"
    } 
    
    else {
        return "Try asking something else!";
    }
}