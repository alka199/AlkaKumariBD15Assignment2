const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to stock portfolio analysis API!");
});

//Calculate the Returns of the Stocks added
function calculateStock(boughtAt, marketPrice, quantity) {
  let totalReturn = (marketPrice - boughtAt) * quantity;
  return totalReturn.toString();
}
app.get("/calculate-returns", (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);
  res.send(calculateStock(boughtAt, marketPrice, quantity));
});

//Calculate the Total Returns
function totalReturns(stock1, stock2, stock3, stock4) {
  let calculateReturn = stock1 + stock2 + stock3 + stock4;
  return calculateReturn.toString();
}
app.get("/total-returns", (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  res.send(totalReturns(stock1, stock2, stock3, stock4));
});

//Calculate the Return Percentage
function CalculateReturnPercentage(boughtAt, returns) {
  let returnPercentage = (returns / boughtAt) * 100;
  return returnPercentage.toString();
}
app.get("/calculate-return-percentage", (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  res.send(CalculateReturnPercentage(boughtAt, returns));
});

//Calculate the Total Return Percentage
function CalculateTotalReturnPercentage(stock1, stock2, stock3, stock4) {
  let TotalReturnPercentage = stock1 + stock2 + stock3 + stock4;
  return TotalReturnPercentage.toString();
}
app.get("/total-return-percentage", (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  res.send(CalculateTotalReturnPercentage(stock1, stock2, stock3, stock4));
});

//Identify the Status of Stocks based on their Return Value
function IdentifyStatus(returnPercentage) {
  if (returnPercentage > 0) {
    return "profit";
  } else {
    return "loss";
  }
}
app.get("/status", (req, res) => {
  let returnPercentage = req.query.returnPercentage;
  res.send(IdentifyStatus(returnPercentage));
});

let PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
