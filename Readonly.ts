type Users=({
    readonly _id: Number,
    name: String,
    email: String,
    isPaid: Boolean,
    creditCard?:Number})

let createUsers: Users={
    _id: 1234,
    name: "Aayush",
    email: "A@gmail.com",
    isPaid: true,
}

type creditCardNumber=({
    creditNumber: Number
})


type creditCardName=({
    creditName: String
})


type creditCardCVV= creditCardNumber & creditCardName & ({
    creditCVV: Number
})


