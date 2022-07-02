const { default: BigNumber } = require('bignumber.js');
const qs = require('qs');
const Web3 = require('web3');


async function listAvailableTokens(){
    console.log("initializing");
    let response = await fetch('https://tokens.coingecko.com/uniswap/all.json');
    let tokenListJSON = await response.json();
    console.log("listing available tokens");
    console.log(tokenListJSON);
    tokens = tokenListJSON.tokens
    console.log("tokens:", tokens);
}

async function main() {

    await listAvailableTokens();

    let currentTrade = {};
    currentTrade["from"] = "ETH";
    currentTrade["to"] = "USDC";

    const params = {
        sellToken: currentTrade.from.address,
        buyToken: currentTrade.to.address,
        sellAmount: amount,
    }

    // Fetch the swap price.
    const response = await fetch(
        `https://api.0x.org/swap/v1/price?${qs.stringify(params)}`
    );

    swapPriceJSON = await response.json();
    console.log("Price: ", swapPriceJSON);
}


main();
